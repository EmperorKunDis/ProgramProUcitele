#!/usr/bin/env python3
"""
Batch processor for generating agent documentation from template.
YOLO mode - processes all 1116 files.
"""

import os
import re
from pathlib import Path

# Paths
BASE_DIR = Path("/Users/martinsvanda/Documents/ProgramProUcitele/WebApp_Guide/PromptLibrary/agent-docs")
TEMPLATE_PATH = Path("/Users/martinsvanda/Documents/ProgramProUcitele/WebApp_Guide/PromptLibrary/template.md")

def filename_to_agent_name(filename: str) -> str:
    """Convert WORKFLOW_ANALYTICS to WorkflowAnalyticsAgent"""
    parts = filename.replace('.md', '').split('_')
    return ''.join(word.capitalize() for word in parts) + 'Agent'

def filename_to_title(filename: str) -> str:
    """Convert WORKFLOW_ANALYTICS to Workflow Analytics"""
    parts = filename.replace('.md', '').split('_')
    return ' '.join(word.capitalize() for word in parts)

def determine_domain(filepath: str, filename: str) -> str:
    """Determine domain based on folder and filename"""
    folder = Path(filepath).parent.name
    domain_map = {
        '01-agents': 'agent-architecture',
        '02-orchestration': 'orchestration',
        '03-tools': 'tooling',
        '04-memory': 'memory-management',
        '05-prompts': 'prompt-engineering',
        '06-evaluation': 'evaluation',
        '07-workflows': 'workflow-management',
        '08-deployment': 'deployment',
        '09-security': 'security',
        '10-optimization': 'optimization',
    }
    return domain_map.get(folder, 'general')

def generate_content(filename: str, filepath: str) -> str:
    """Generate document content based on template structure"""

    agent_name = filename_to_agent_name(filename)
    title = filename_to_title(filename)
    domain = determine_domain(filepath, filename)
    snake_name = filename.replace('.md', '').lower()

    content = f'''# MASTER PROMPT: AI AGENT SPECIFICATION GENERATOR

Jsi senior AI Agent Engineer specializující se na LangGraph a multi-agent systémy.

---

## 📋 VSTUPNÍ PARAMETRY

```yaml
output_file: "{filename}"
agent_name: "{agent_name}"
agent_domain: "{domain}"
business_context: |
  Agent specializovaný na {title.lower()} v kontextu AI systémů.
  Poskytuje pokročilé funkce pro správu a optimalizaci {domain}.
primary_goal: "Implementovat a spravovat {title.lower()}"
target_systems: [LangGraph, LangChain, Custom APIs]
language: "CZ"
```

---

## 📐 POVINNÁ STRUKTURA DOKUMENTU

### 1. EXECUTIVE SUMMARY

- **Účel agenta**: {agent_name} poskytuje komplexní řešení pro {title.lower()}. Automatizuje klíčové procesy a zajišťuje konzistentní výsledky.
- **Business value proposition**: Zvýšení efektivity o 40%, snížení manuální práce o 60%, zlepšení kvality výstupů.
- **Měřitelné KPIs**: Propustnost, latence, úspěšnost operací, uživatelská spokojenost.
- **Klíčoví stakeholdeři**: Engineering tým, Product Management, DevOps.

---

### 2. AGENT IDENTITY CARD

```yaml
metadata:
  agent_name: {agent_name}
  agent_id: {snake_name.upper()[:3]}-001
  version: "1.0.0"
  created_date: 2024-01-22
  owner_team: Platform Engineering

classification:
  autonomy_level: semi_autonomous
  decision_authority: operational
  risk_category: medium

domain:
  primary: {domain}
  secondary: [automation, optimization]
  industry_vertical: technology
```

---

### 3. SYSTEM CONTEXT & BOUNDARIES

#### 3.1 Scope Definition Matrix

| Category | Items |
|----------|-------|
| ✅ IN SCOPE | Implementace {title.lower()}, monitoring, optimalizace |
| ❌ OUT OF SCOPE | Infrastruktura, autentizace, billing |
| 🔮 FUTURE SCOPE | ML-based optimalizace, prediktivní analýza |

#### 3.2 Operating Environment

```yaml
deployment:
  model: cloud
  infrastructure: Kubernetes
  runtime: [Python 3.11+, LangGraph]

scaling:
  min_instances: 2
  max_instances: 10
  scaling_trigger: cpu_utilization > 70%

dependencies:
  required: [langchain, langgraph, redis]
  optional: [prometheus, grafana]
```

---

### 4. ARCHITECTURE DESIGN

#### 4.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    {agent_name}                              │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │ Input   │→ │ Process │→ │ Decide  │→ │ Output  │        │
│  │ Layer   │  │ Layer   │  │ Layer   │  │ Layer   │        │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘        │
├─────────────────────────────────────────────────────────────┤
│  [Tools] [State Management] [Memory] [Observability]        │
└─────────────────────────────────────────────────────────────┘
```

#### 4.2 LangGraph State Schema

```python
from typing import TypedDict, Annotated, Optional, List
from langgraph.graph.message import add_messages

class {agent_name}State(TypedDict):
    messages: Annotated[List, add_messages]
    input_data: dict
    validated_input: Optional[dict]
    analysis_result: Optional[dict]
    decision: Optional[dict]
    confidence_score: Optional[float]
    final_output: Optional[dict]
    current_step: str
    error_state: Optional[dict]
    execution_id: str
```

#### 4.3 Graph Topology

```python
from langgraph.graph import StateGraph, END

def build_{snake_name}_graph():
    graph = StateGraph({agent_name}State)

    graph.add_node("input_validation", input_validation_node)
    graph.add_node("processing", processing_node)
    graph.add_node("decision", decision_node)
    graph.add_node("output_formatting", output_formatting_node)
    graph.add_node("error_handler", error_handler_node)

    graph.set_entry_point("input_validation")

    graph.add_conditional_edges(
        "input_validation",
        route_after_validation,
        {{"valid": "processing", "invalid": "error_handler"}}
    )

    graph.add_edge("processing", "decision")
    graph.add_edge("decision", "output_formatting")
    graph.add_edge("output_formatting", END)
    graph.add_edge("error_handler", END)

    return graph.compile()
```

---

### 5. NODES SPECIFICATION

#### 5.1 Input Validation Node

```yaml
node_id: "input_validation"
node_name: "Validace vstupů"
purpose: Validuje vstupní data pro {title.lower()}

input:
  state_keys_read: [input_data]
output:
  state_keys_written: [validated_input]

llm_config:
  required: false

performance:
  timeout_seconds: 5
```

#### 5.2 Processing Node

```yaml
node_id: "processing"
node_name: "Zpracování {title}"
purpose: Hlavní logika pro {title.lower()}

llm_config:
  required: true
  model: "gpt-4o"
  temperature: 0.1
```

---

### 6. TOOLS CATALOG

```yaml
tools:
  - tool_id: "validate_{snake_name}"
    tool_name: "Validátor pro {title}"
    category: "validation"

  - tool_id: "process_{snake_name}"
    tool_name: "Procesor pro {title}"
    category: "processing"

  - tool_id: "analyze_{snake_name}"
    tool_name: "Analyzátor pro {title}"
    category: "analysis"
```

---

### 7. DECISION LOGIC & POLICIES

```yaml
decision_type: "{snake_name}_decision"

decision_factors:
  - factor: "Data Quality"
    weight: 0.4
  - factor: "Processing Confidence"
    weight: 0.35
  - factor: "Business Rules Compliance"
    weight: 0.25

decision_thresholds:
  auto_approve: "score >= 0.8"
  needs_review: "score >= 0.5 AND score < 0.8"
  auto_reject: "score < 0.5"
```

---

### 8. OBSERVABILITY & MONITORING

```yaml
metrics:
  - name: "{snake_name}_executions_total"
    type: "counter"
    labels: ["status"]

  - name: "{snake_name}_duration_seconds"
    type: "histogram"
    buckets: [0.1, 0.5, 1, 2, 5, 10]

alerts:
  - name: "{agent_name}HighErrorRate"
    severity: "critical"
    condition: "error_rate > 5%"
```

---

### 9. ERROR HANDLING

```yaml
error_categories:
  transient:
    examples: [TimeoutError, RateLimitError]
    action: "retry"

  permanent:
    examples: [ValidationError, AuthError]
    action: "fail_fast"

circuit_breaker:
  failure_threshold: 5
  timeout_seconds: 60
```

---

### 10. TESTING STRATEGY

| ID | Scenario | Type | Priority |
|----|----------|------|----------|
| TS001 | Happy path | E2E | P0 |
| TS002 | Invalid input | Unit | P0 |
| TS003 | Timeout handling | Integration | P1 |

---

### 11. DEPLOYMENT

```yaml
environments:
  production:
    llm_model: "gpt-4o"
    log_level: "INFO"
  staging:
    llm_model: "gpt-4o-mini"
    log_level: "DEBUG"

infrastructure:
  replicas: 3
  cpu_limit: "2000m"
  memory_limit: "4Gi"
```

---

### 12. APPENDICES

#### Glossary

| Term | Definition |
|------|------------|
| {agent_name} | Agent pro {title.lower()} |
| {domain} | Doména zaměření agenta |

#### Change Log

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2024-01-22 | Initial release |

---

*Vygenerováno automaticky pro {title} | {domain} | 2024-01-22*
'''
    return content

def process_all_files():
    """Process all markdown files in agent-docs"""
    count = 0
    errors = []

    for root, dirs, files in os.walk(BASE_DIR):
        for file in files:
            if file.endswith('.md'):
                filepath = os.path.join(root, file)
                try:
                    content = generate_content(file, filepath)
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    count += 1
                    if count % 100 == 0:
                        print(f"Processed {count} files...")
                except Exception as e:
                    errors.append(f"{filepath}: {str(e)}")

    print(f"\n=== COMPLETE ===")
    print(f"Total files processed: {count}")
    if errors:
        print(f"Errors: {len(errors)}")
        for err in errors[:10]:
            print(f"  - {err}")

if __name__ == "__main__":
    print("Starting batch processing of 1116 agent documentation files...")
    print(f"Base directory: {BASE_DIR}")
    process_all_files()
