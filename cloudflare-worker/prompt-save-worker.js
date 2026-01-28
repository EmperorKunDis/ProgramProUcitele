/**
 * Cloudflare Worker - Prompt Library Save Proxy
 * 
 * Bezpečně commituje změny na GitHub bez odhalení tokenu.
 * 
 * Environment Variables (nastav v Cloudflare dashboard):
 * - GITHUB_TOKEN: Personal Access Token s repo write permissions
 * - ALLOWED_ORIGIN: https://emperorkundis.github.io (nebo * pro dev)
 */

const GITHUB_OWNER = 'EmperorKunDis';
const GITHUB_REPO = 'ProgramProUcitele';
const GITHUB_BRANCH = 'main';
const BASE_PATH = 'WebApp_Guide/PromptLibrary/agent-docs';

export default {
  async fetch(request, env) {
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || 'https://emperorkundis.github.io',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Only POST allowed
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    try {
      const body = await request.json();
      const { category, filename, content, author } = body;

      // Validate input
      if (!category || !filename || !content) {
        return new Response(JSON.stringify({ error: 'Missing required fields: category, filename, content' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // Sanitize inputs (prevent path traversal)
      const safeCategory = category.replace(/[^a-zA-Z0-9_-]/g, '');
      const safeFilename = filename.replace(/[^a-zA-Z0-9_.-]/g, '');
      
      if (!safeCategory || !safeFilename || !safeFilename.endsWith('.md')) {
        return new Response(JSON.stringify({ error: 'Invalid category or filename' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      const filePath = `${BASE_PATH}/${safeCategory}/${safeFilename}`;

      // Get current file SHA (needed for update)
      const sha = await getFileSHA(env.GITHUB_TOKEN, filePath);

      // Commit the file
      const result = await commitFile(env.GITHUB_TOKEN, filePath, content, sha, author);

      return new Response(JSON.stringify({ 
        success: true, 
        message: 'File saved successfully',
        commit: result.commit?.sha?.substring(0, 7),
        path: filePath
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });

    } catch (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({ 
        error: error.message || 'Internal server error' 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }
};

async function getFileSHA(token, filePath) {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}?ref=${GITHUB_BRANCH}`;
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'PromptLibrary-Worker'
    }
  });

  if (response.ok) {
    const data = await response.json();
    return data.sha;
  }
  
  return null; // File doesn't exist yet
}

async function commitFile(token, filePath, content, sha, author) {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`;
  
  // Base64 encode content with UTF-8 support
  const encoder = new TextEncoder();
  const data = encoder.encode(content);
  const base64Content = btoa(String.fromCharCode(...data));

  const body = {
    message: `📝 Update ${filePath.split('/').pop()}${author ? ` (by ${author})` : ''}`,
    content: base64Content,
    branch: GITHUB_BRANCH
  };

  if (sha) {
    body.sha = sha;
  }

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      'User-Agent': 'PromptLibrary-Worker'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'GitHub API error');
  }

  return await response.json();
}
