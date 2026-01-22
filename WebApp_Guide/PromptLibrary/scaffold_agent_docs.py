import os
import re
from pathlib import Path
from datetime import datetime

# --- CONFIGURATION ---
SOURCE_FILE = "/Users/martinsvanda/Documents/ProgramProUcitele/WebApp_Guide/PromptLibrary/MEGA_FILE_LIST.md"
BASE_DIR = "/Users/martinsvanda/Documents/ProgramProUcitele/WebApp_Guide/PromptLibrary/agent-docs"
AUTHOR = "Antigravity Agent"
VERSION = "1.0.0"

# --- TEMPLATES ---
# These templates are designed to be "Profi", "Complex", and "Structured"

AGENT_TEMPLATE = """---
description: >-
  {filename_clean} - Advanced Autonomous Agent Definition.
  Part of the Agentic Framework.
version: {version}
author: {author}
last_updated: {date}
tags: [agent, ai, autonomous, {category_tag}]
---

# 🤖 {title}

> **Role Definition**: High-performance autonomous agent specialized in {filename_clean}. Designed for scalable, fault-tolerant operations within a multi-agent orchestration grid.

## 📋 System Prompts & Persona

### Core Identity
You are the **{title}**, an elite AI specialist with deep expertise in your domain. Your thinking is structured, logical, and exhaustive. You do not hallucinate; you verify. You operate with a **Mission-Critical Mindset**.

**Prime Directives:**
1. **Accuracy**: Never guess. Verification is mandatory.
2. **Efficiency**: Optimize token usage without sacrificing depth.
3. **Safety**: Adhere to all safety guardrails and ethics protocols.
4. **Context Awareness**: Maintain state provided by the Orchestrator.

### Operational Mode
- **Input Processing**: Structural analysis of user intent + context injection.
- **Reasoning Engine**: Chain-of-Thought (CoT) with error checking.
- **Output Generation**: Structured Markdown, Code blocks, or JSON schema as requested.

## 🛠️ Tool Definition Strategy

The {title} has access to the following toolset categories. Each tool call must be syntactically perfect.

| Tool Category | Capabilities | Usage Pattern |
|---------------|--------------|---------------|
| **Core Research** | `web_search`, `vector_query` | Retrieve verifiable constraints & facts. |
| **Execution** | `code_interpreter`, `shell_exec` | Run validation scripts or build artifacts. |
| **Communication** | `send_message`, `handoff_to` | Coordinate with Supervisor/other agents. |

## 🧠 Cognitive Architecture

```mermaid
graph TD
    A[Input Stimulus] --> B{{Intent Classification}}
    B -->|Query| C[Knowledge Retrieval]
    B -->|Action| D[Tool Selection]
    C --> E[Context Fusion]
    D --> F[Execution Layer]
    F --> G[Result Validation]
    E --> H[Response Synthesis]
    G --> H
    H --> I[Final Output]
```

## 🔄 Interaction Workflows

### Standard Operating Procedure (SOP)
1. **Receive Task**: Acknowledge receipt and requested output format.
2. **Analyze**: Break down complex requests into atomic sub-tasks.
3. **Execute**: Run tools in parallel where safe.
4. **Synthesize**: Aggregate results, filter noise.
5. **Report**: Deliver final payload with confidence score.

### Error Handling & Recovery
- **Tool Failure**: Retry with exponential backoff (max 3 attempts).
- **Ambiguity**: Request clarification from Supervisor immediately.
- **Hallucination Check**: Cross-reference output with retrieved context.

## 📊 Evaluation Metrics

- **Success Rate**: % of tasks completed without human intervention.
- **Response Latency**: ms to first token.
- **Context Adherence**: 1-10 score on maintaining prompt instructions.

---
*Generated: {date} | Agent ID: {filename_clean}_v{version}*
"""

ORCHESTRATION_TEMPLATE = """---
description: >-
  {title} - Enterprise-Grade Orchestration Pattern.
  Designing resilient multi-agent systems.
version: {version}
author: {author}
last_updated: {date}
tags: [orchestration, pattern, architecture, system-design]
---

# 🎼 {title}

> **Abstract**: A robust architectural pattern for managing complex interactions between multiple autonomous agents. Optimized for {filename_clean} scenarios.

## 📐 Conceptual Architecture

### Context & Problem Space
In large-scale agentic systems, **{filename_clean}** addresses the challenge of coordinating distributed reasoning units. Without this pattern, systems suffer from:
- Race conditions between agents.
- Inconsistent state management.
- Token wastage due to redundant processing.

### Solution Overview
The {title} implements a structured flow where:
1. **Controller**: Centralizes decision logic (or distributes it peer-to-peer).
2. **Workers**: Execute constrained tasks.
3. **Bus**: Manages message passing and state synchronization.

## 🧩 Implementation Design

### Visual Blueprint

```mermaid
sequenceDiagram
    participant User
    participant Orchestrator
    participant Agent_A
    participant Agent_B
    
    User->>Orchestrator: Submit Task
    Orchestrator->>Orchestrator: Analyze & Decompose
    par Parallel Execution
        Orchestrator->>Agent_A: Dispatch Subtask 1
        Orchestrator->>Agent_B: Dispatch Subtask 2
    end
    Agent_A-->>Orchestrator: Result 1
    Agent_B-->>Orchestrator: Result 2
    Orchestrator->>Orchestrator: Synthesize & Merge
    Orchestrator->>User: Final Response
```

### Key Components

#### 1. State Manager
Maintains the "Shared Truth". Uses immutable data structures to prevent side effects.
- **Tech Stack**: Redis / Postgres / In-Memory Graph.

#### 2. Router / Dispatcher
Determines the optimal agent for a given sub-task based on:
- Capability matching.
- Current load/availability.
- Cost constraints.

#### 3. Error Circuit Breaker
If an agent fails `N` times, the Orchestrator isolates the node and reroutes to a fallback strategy.

## 💻 Code Implementation Code (Python/LangGraph)

```python
from typing import TypedDict, Annotated
from langgraph.graph import StateGraph, END

class AgentState(TypedDict):
    input: str
    messages: list[str]
    agent_outcomes: dict

def router(state: AgentState):
    # Dynamic routing logic utilizing {title} principles
    if "error" in state["agent_outcomes"]:
        return "remedy_agent"
    return "next_step"

workflow = StateGraph(AgentState)
# ... Graph construction logic ...
```

## 🚀 Deployment Considerations

- **Scalability**: Can this pattern handle 100+ concurrent users? Yes, via horizontal scaling of Worker Nodes.
- **Latency**: Minimal overhead added by the Orchestration layer (< 50ms).
- **Cost**: Optimized to reduce LLM calls by 30% via caching and intent pre-filtering.

---
*Enterprise Architecture Series | {date}*
"""

TOOL_TEMPLATE = """---
description: >-
  {title} - Production-Ready Tool Specification.
  Interface definition and implementation guide.
version: {version}
author: {author}
last_updated: {date}
tags: [tool, function-calling, api, integration]
---

# 🛠️ {title}

> **Capability**: Allows the agent to perform **{filename_clean}** operations securely and efficiently.

## 📋 Interface Specification

### Function Schema (OpenAI Format)

```json
{{
  "name": "{filename_clean}",
  "description": "Executes {filename_clean} operations with strict validation.",
  "parameters": {{
    "type": "object",
    "properties": {{
      "target_resource": {{
        "type": "string",
        "description": "Identifier of the target system or file."
      }},
      "operation_mode": {{
        "type": "string",
        "enum": ["read", "write", "audit"],
        "description": "The specific sub-operation to perform."
      }},
      "payload": {{
        "type": "object",
        "description": "Structured data payload for the operation."
      }}
    }},
    "required": ["target_resource", "operation_mode"]
  }}
}}
```

## 🔐 Security & Sandbox

> [!WARNING]
> **Risk Level**: High. Access to external systems must be guarded.

- **Authentication**: Usage requires Validated Bearer Token (Scope: `{filename_clean}:execute`).
- **Validation**: All inputs are sanitized to prevent Injection Attacks.
- **Rate Limiting**: Max 50 calls/min per Agent Instance.

## 💻 Implementation Example (Python)

```python
from typing import Dict, Any
from pydantic import BaseModel, Field

class {title_classname}Input(BaseModel):
    target: str = Field(..., description="Target Endpoint")
    params: Dict[str, Any] = Field(default_factory=dict)

def execute_{filename_clean}(input_data: {title_classname}Input) -> str:
    \"\"\"
    Implements the core logic for {title}.
    \"\"\"
    # 1. Validate Pre-conditions
    # 2. Establish Secure Connection
    # 3. Execute Operation
    # 4. Return Normalized Result
    pass
```

## 🧪 Testing & Validation

- **Unit Tests**: Mock external dependencies. Verify error handling for 4xx/5xx responses.
- **Integration Tests**: Run against sandbox environment nightly.
- **Benchmark**: Average execution time must be < 200ms.

---
*Tool Registry v{version} | {date}*
"""

GENERIC_TEMPLATE = """---
description: >-
  {title} - Detailed Technical Documentation.
version: {version}
author: {author}
last_updated: {date}
tags: [documentation, technical, reference]
---

# 📄 {title}

> **Overview**: Comprehensive guide and reference for **{filename_clean}**.

## 🔍 Conceptual Framework

### Core Principles
1. **Modularity**: {title} is designed to be decoupled and reusable.
2. **Reliability**: Engineered for high availability and consistency.
3. **Observability**: Built-in hooks for monitoring and tracing.

## ⚙️ Technical Details

### Architecture Components
- **Core Engine**: The primary logic processor for {filename_clean}.
- **Interface Layer**: API/Classes exposed to other modules.
- **Data Persistence**: How state/data is stored and retrieved.

### Data Flow
1. Input Data -> Validation -> {title} Process -> Output
2. Error Condition -> Exception Handler -> Fallback/Log

## 💡 Implementation Patterns

### Best Practices
- **Do**: Use typed interfaces.
- **Don't**: Bypass validation layers.

```python
# Example Usage Pattern
config = Config(mode="strict")
instance = {title_classname}(config)
result = instance.run()
```

## 🔮 Future Roadmap

- [ ] Optimization of core algorithm.
- [ ] Integration with V2 API standards.
- [ ] Enhanced telemetry metrics.

---
*Documentation Library | {date}*
"""

# --- MAIN LOGIC ---

def get_template(category_path, filename):
    """Selects the correct 'Profi' template based on directory."""
    if "01-agents" in category_path or "19-multimodal" in category_path or "21-domain-specific" in category_path:
        return AGENT_TEMPLATE
    elif "02-orchestration" in category_path or "13-patterns" in category_path or "07-workflows" in category_path:
        return ORCHESTRATION_TEMPLATE
    elif "03-tools" in category_path or "12-integrations" in category_path:
        return TOOL_TEMPLATE
    else:
        return GENERIC_TEMPLATE

def to_classname(text):
    """Converts snake_case or standard text to PascalCase for class names."""
    clean = re.sub(r'[^a-zA-Z0-9]', ' ', text)
    return ''.join(word.capitalize() for word in clean.split())

def main():
    print(f"Reading {SOURCE_FILE}...")
    
    with open(SOURCE_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    # Regex to find Categories (Folder names)
    # Format: ## 📂 01-AGENTS/ ...
    category_matches = list(re.finditer(r'## 📂 ([\w\d-]+)/', content))
    
    # Map to store tasks
    # { "01-agents": ["AGENT_TEMPLATE.md", ...] }
    tasks = {}
    
    lines = content.split('\n')
    current_category = None
    
    # Extremely simple parser logic
    for line in lines:
        if "## 📊 STATISTIKY" in line or "## 🚀 DOPORUČENÉ" in line:
            break
            
        cat_match = re.search(r'## 📂 ([\w\d-]+)/', line)
        if cat_match:
            current_category = cat_match.group(1).lower()
            tasks[current_category] = []
            continue
            
        # File Match inside code blocks
        # We look for lines ending in .md inside the blocks basically
        # The line usually looks like: AGENT_TEMPLATE.md                    # Univerzální šablona agenta
        if current_category and ".md" in line:
            # simple extractions
            parts = line.split('.md')
            if len(parts) > 0:
                filename = parts[0].strip() + ".md"
                # Basic cleanup if there are leading characters
                filename = filename.split()[-1] # Take the last word if there was junk before
                if not filename.endswith('.md'): continue 
                
                tasks[current_category].append(filename)

    # Execution
    total_files = 0
    date_str = datetime.now().strftime("%Y-%m-%d")

    for category, files in tasks.items():
        cat_dir = os.path.join(BASE_DIR, category)
        os.makedirs(cat_dir, exist_ok=True)
        
        print(f"Processing Category: {category} ({len(files)} files)")
        
        for filename in files:
            file_path = os.path.join(cat_dir, filename)
            
            # Prepare metadata for template
            title = filename.replace('.md', '').replace('_', ' ').title()
            title_classname = to_classname(title)
            filename_clean = filename.replace('.md', '').lower()
            
            # Select template
            template = get_template(category, filename)
            
            # Fill Content
            file_content = template.format(
                title=title,
                filename_clean=filename_clean,
                title_classname=title_classname,
                author=AUTHOR,
                version=VERSION,
                date=date_str,
                category_tag=category
            )
            
            # Write File
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(file_content)
            
            total_files += 1

    print(f"Done! Generated {total_files} files in {BASE_DIR}")

if __name__ == "__main__":
    main()
