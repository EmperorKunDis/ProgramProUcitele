# 🗂️ MEGA SEZNAM MD SOUBORŮ PRO AGENTY A ORCHESTRACI

> Kompletní katalog 500+ dokumentačních souborů pro vývoj AI agentů, orchestraci, a multi-agent systémů.

---

## 📁 STRUKTURA KATEGORIÍ

```
agent-docs/
├── 01-agents/                    # Definice agentů (80+ souborů)
├── 02-orchestration/             # Orchestrační patterny (60+ souborů)
├── 03-tools/                     # Nástroje a integrace (70+ souborů)
├── 04-state/                     # State management (40+ souborů)
├── 05-memory/                    # Paměťové systémy (50+ souborů)
├── 06-prompts/                   # Prompt engineering (45+ souborů)
├── 07-workflows/                 # Workflow definice (55+ souborů)
├── 08-evaluation/                # Testování a evaluace (40+ souborů)
├── 09-security/                  # Bezpečnost (35+ souborů)
├── 10-deployment/                # Nasazení (30+ souborů)
├── 11-monitoring/                # Monitoring a observability (35+ souborů)
├── 12-integrations/              # Externí integrace (50+ souborů)
├── 13-patterns/                  # Design patterns (45+ souborů)
├── 14-templates/                 # Šablony (30+ souborů)
├── 15-examples/                  # Příklady (40+ souborů)
├── 16-config/                    # Konfigurace (25+ souborů)
├── 17-knowledge/                 # Knowledge management (40+ souborů)
├── 18-human-loop/                # Human-in-the-loop (30+ souborů)
├── 19-multimodal/                # Multimodální agenti (35+ souborů)
├── 20-advanced/                  # Pokročilé koncepty (50+ souborů)
└── 21-domain-specific/           # Doménově specifické (60+ souborů)
```

---

## 📂 01-AGENTS/ — Definice Agentů

### Základní Agenti

```
AGENT_TEMPLATE.md                    # Univerzální šablona agenta
AGENT_ANATOMY.md                     # Anatomie agenta - komponenty
AGENT_LIFECYCLE.md                   # Životní cyklus agenta
AGENT_CAPABILITIES.md                # Definice schopností
AGENT_CONSTRAINTS.md                 # Omezení a guardrails
AGENT_IDENTITY.md                    # Identita a persona
AGENT_GOALS.md                       # Cíle a motivace
AGENT_BELIEFS.md                     # Beliefs a knowledge base
```

### Specializovaní Agenti - Výzkum

```
RESEARCHER_AGENT.md                  # Výzkumný agent
ACADEMIC_RESEARCHER_AGENT.md         # Akademický výzkumník
MARKET_RESEARCHER_AGENT.md           # Tržní výzkum
COMPETITIVE_INTELLIGENCE_AGENT.md    # Konkurenční zpravodajství
PATENT_RESEARCHER_AGENT.md           # Patentový výzkum
LITERATURE_REVIEW_AGENT.md           # Přehled literatury
FACT_CHECKER_AGENT.md                # Ověřovač faktů
SOURCE_VALIDATOR_AGENT.md            # Validátor zdrojů
CITATION_AGENT.md                    # Citační agent
TREND_ANALYST_AGENT.md               # Analýza trendů
```

### Specializovaní Agenti - Kódování

```
CODER_AGENT.md                       # Základní programátor
FRONTEND_DEVELOPER_AGENT.md          # Frontend vývojář
BACKEND_DEVELOPER_AGENT.md           # Backend vývojář
FULLSTACK_DEVELOPER_AGENT.md         # Fullstack vývojář
DEVOPS_AGENT.md                      # DevOps specialista
DATABASE_ARCHITECT_AGENT.md          # Databázový architekt
API_DESIGNER_AGENT.md                # API designer
SECURITY_ENGINEER_AGENT.md           # Security engineer
QA_ENGINEER_AGENT.md                 # QA engineer
CODE_REVIEWER_AGENT.md               # Code reviewer
REFACTORING_AGENT.md                 # Refaktorovací agent
DEBUGGER_AGENT.md                    # Debugger
PERFORMANCE_OPTIMIZER_AGENT.md       # Performance optimizer
DOCUMENTATION_CODER_AGENT.md         # Dokumentační programátor
TEST_WRITER_AGENT.md                 # Tvůrce testů
MIGRATION_AGENT.md                   # Migrační agent
LEGACY_CODE_AGENT.md                 # Legacy code specialista
MOBILE_DEVELOPER_AGENT.md            # Mobilní vývojář
GAME_DEVELOPER_AGENT.md              # Herní vývojář
EMBEDDED_SYSTEMS_AGENT.md            # Embedded systémy
ML_ENGINEER_AGENT.md                 # ML engineer
DATA_ENGINEER_AGENT.md               # Data engineer
BLOCKCHAIN_DEVELOPER_AGENT.md        # Blockchain vývojář
```

### Specializovaní Agenti - Psaní

```
WRITER_AGENT.md                      # Základní pisatel
COPYWRITER_AGENT.md                  # Copywriter
TECHNICAL_WRITER_AGENT.md            # Technický pisatel
CONTENT_STRATEGIST_AGENT.md          # Content stratég
BLOG_WRITER_AGENT.md                 # Blogger
SOCIAL_MEDIA_WRITER_AGENT.md         # Social media pisatel
EMAIL_WRITER_AGENT.md                # Email copywriter
UX_WRITER_AGENT.md                   # UX writer
SCRIPT_WRITER_AGENT.md               # Scenárista
JOURNALIST_AGENT.md                  # Novinář
EDITOR_AGENT.md                      # Editor
PROOFREADER_AGENT.md                 # Korektor
TRANSLATOR_AGENT.md                  # Překladatel
LOCALIZATION_AGENT.md                # Lokalizátor
SEO_WRITER_AGENT.md                  # SEO pisatel
GRANT_WRITER_AGENT.md                # Grant writer
PROPOSAL_WRITER_AGENT.md             # Tvůrce návrhů
REPORT_WRITER_AGENT.md               # Tvůrce reportů
CREATIVE_WRITER_AGENT.md             # Kreativní pisatel
GHOSTWRITER_AGENT.md                 # Ghostwriter
```

### Specializovaní Agenti - Analýza

```
DATA_ANALYST_AGENT.md                # Datový analytik
BUSINESS_ANALYST_AGENT.md            # Business analytik
FINANCIAL_ANALYST_AGENT.md           # Finanční analytik
RISK_ANALYST_AGENT.md                # Risk analytik
STATISTICAL_ANALYST_AGENT.md         # Statistický analytik
SENTIMENT_ANALYST_AGENT.md           # Sentiment analytik
PREDICTIVE_ANALYST_AGENT.md          # Prediktivní analytik
FORENSIC_ANALYST_AGENT.md            # Forenzní analytik
COMPLIANCE_ANALYST_AGENT.md          # Compliance analytik
PERFORMANCE_ANALYST_AGENT.md         # Performance analytik
ROOT_CAUSE_ANALYST_AGENT.md          # Root cause analytik
DIAGNOSTIC_AGENT.md                  # Diagnostický agent
```

### Specializovaní Agenti - Plánování

```
PLANNER_AGENT.md                     # Základní plánovač
PROJECT_PLANNER_AGENT.md             # Projektový plánovač
STRATEGIC_PLANNER_AGENT.md           # Strategický plánovač
RESOURCE_PLANNER_AGENT.md            # Resource plánovač
SCHEDULE_OPTIMIZER_AGENT.md          # Optimalizér rozvrhu
BUDGET_PLANNER_AGENT.md              # Budget plánovač
ROADMAP_AGENT.md                     # Roadmap agent
SPRINT_PLANNER_AGENT.md              # Sprint plánovač
CAPACITY_PLANNER_AGENT.md            # Capacity plánovač
CONTINGENCY_PLANNER_AGENT.md         # Contingency plánovač
```

### Specializovaní Agenti - Orchestrace

```
SUPERVISOR_AGENT.md                  # Supervisor
COORDINATOR_AGENT.md                 # Koordinátor
ROUTER_AGENT.md                      # Router
DISPATCHER_AGENT.md                  # Dispatcher
LOAD_BALANCER_AGENT.md               # Load balancer
AGGREGATOR_AGENT.md                  # Aggregátor
MEDIATOR_AGENT.md                    # Mediátor
ARBITRATOR_AGENT.md                  # Arbitr
CONSENSUS_AGENT.md                   # Consensus agent
FAILOVER_AGENT.md                    # Failover agent
```

### Specializovaní Agenti - Asistence

```
ASSISTANT_AGENT.md                   # Osobní asistent
CUSTOMER_SUPPORT_AGENT.md            # Zákaznická podpora
SALES_AGENT.md                       # Prodejní agent
ONBOARDING_AGENT.md                  # Onboarding agent
TRAINING_AGENT.md                    # Tréninkový agent
MENTOR_AGENT.md                      # Mentor
COACH_AGENT.md                       # Kouč
CONCIERGE_AGENT.md                   # Concierge
SCHEDULER_AGENT.md                   # Plánovač schůzek
REMINDER_AGENT.md                    # Připomínkovač
```

### Specializovaní Agenti - Kreativa

```
DESIGNER_AGENT.md                    # Designer
UI_DESIGNER_AGENT.md                 # UI designer
GRAPHIC_DESIGNER_AGENT.md            # Grafický designer
BRAND_DESIGNER_AGENT.md              # Brand designer
ILLUSTRATOR_AGENT.md                 # Ilustrátor
VIDEO_EDITOR_AGENT.md                # Video editor
AUDIO_PRODUCER_AGENT.md              # Audio producer
MUSIC_COMPOSER_AGENT.md              # Hudební skladatel
STORYTELLER_AGENT.md                 # Vypravěč
IDEATION_AGENT.md                    # Ideační agent
BRAINSTORMING_AGENT.md               # Brainstorming agent
```

### Meta Agenti

```
CRITIC_AGENT.md                      # Kritik
REVIEWER_AGENT.md                    # Reviewer
VALIDATOR_AGENT.md                   # Validátor
QUALITY_ASSURANCE_AGENT.md           # QA agent
IMPROVEMENT_AGENT.md                 # Zlepšovatel
SELF_REFLECTION_AGENT.md             # Sebereflexní agent
META_COGNITIVE_AGENT.md              # Metakognitivní agent
LEARNING_AGENT.md                    # Učící se agent
ADAPTATION_AGENT.md                  # Adaptační agent
EVOLUTION_AGENT.md                   # Evoluční agent
```

---

## 📂 02-ORCHESTRATION/ — Orchestrační Patterny

### Základní Patterny

```
ORCHESTRATION_OVERVIEW.md            # Přehled orchestrace
SEQUENTIAL_PATTERN.md                # Sekvenční pattern
PARALLEL_PATTERN.md                  # Paralelní pattern
CONDITIONAL_PATTERN.md               # Podmíněný pattern
LOOP_PATTERN.md                      # Smyčkový pattern
BRANCH_MERGE_PATTERN.md              # Branch-merge pattern
SCATTER_GATHER_PATTERN.md            # Scatter-gather pattern
PIPELINE_PATTERN.md                  # Pipeline pattern
CHAIN_PATTERN.md                     # Chain pattern
```

### Pokročilé Patterny

```
HIERARCHICAL_PATTERN.md              # Hierarchický pattern
CONSENSUS_PATTERN.md                 # Konsenzus pattern
VOTING_PATTERN.md                    # Hlasovací pattern
AUCTION_PATTERN.md                   # Aukční pattern
MARKET_PATTERN.md                    # Tržní pattern
BLACKBOARD_PATTERN.md                # Blackboard pattern
PUBLISH_SUBSCRIBE_PATTERN.md         # Pub/sub pattern
EVENT_DRIVEN_PATTERN.md              # Event-driven pattern
REACTIVE_PATTERN.md                  # Reaktivní pattern
SAGA_PATTERN.md                      # Saga pattern
```

### Workflow Patterny

```
MAP_REDUCE_PATTERN.md                # Map-reduce pattern
FORK_JOIN_PATTERN.md                 # Fork-join pattern
SPLIT_AGGREGATE_PATTERN.md           # Split-aggregate pattern
CONTENT_ENRICHER_PATTERN.md          # Content enricher
FILTER_PATTERN.md                    # Filter pattern
TRANSFORMER_PATTERN.md               # Transformer pattern
NORMALIZER_PATTERN.md                # Normalizer pattern
RESEQUENCER_PATTERN.md               # Resequencer pattern
COMPOSED_MESSAGE_PATTERN.md          # Composed message
CLAIM_CHECK_PATTERN.md               # Claim check pattern
```

### Rozhodovací Patterny

```
ROUTING_SLIP_PATTERN.md              # Routing slip
PROCESS_MANAGER_PATTERN.md           # Process manager
DYNAMIC_ROUTER_PATTERN.md            # Dynamic router
CONTENT_BASED_ROUTER_PATTERN.md      # Content-based router
MESSAGE_FILTER_PATTERN.md            # Message filter
RECIPIENT_LIST_PATTERN.md            # Recipient list
SPLITTER_PATTERN.md                  # Splitter
AGGREGATOR_PATTERN.md                # Aggregátor
CORRELATION_PATTERN.md               # Korelace
```

### Error Handling Patterny

```
RETRY_PATTERN.md                     # Retry pattern
CIRCUIT_BREAKER_PATTERN.md           # Circuit breaker
FALLBACK_PATTERN.md                  # Fallback pattern
BULKHEAD_PATTERN.md                  # Bulkhead pattern
TIMEOUT_PATTERN.md                   # Timeout pattern
DEAD_LETTER_PATTERN.md               # Dead letter
COMPENSATION_PATTERN.md              # Kompenzace
ROLLBACK_PATTERN.md                  # Rollback
IDEMPOTENCY_PATTERN.md               # Idempotence
```

### Komunikační Patterny

```
REQUEST_REPLY_PATTERN.md             # Request-reply
FIRE_FORGET_PATTERN.md               # Fire and forget
CALLBACK_PATTERN.md                  # Callback
POLLING_PATTERN.md                   # Polling
LONG_POLLING_PATTERN.md              # Long polling
WEBHOOK_PATTERN.md                   # Webhook
STREAMING_PATTERN.md                 # Streaming
BATCH_PATTERN.md                     # Batch processing
QUEUE_PATTERN.md                     # Queue pattern
PRIORITY_QUEUE_PATTERN.md            # Priority queue
```

### Multi-Agent Patterny

```
SWARM_PATTERN.md                     # Swarm pattern
COLONY_PATTERN.md                    # Colony pattern
TEAM_PATTERN.md                      # Team pattern
HIERARCHY_PATTERN.md                 # Hierarchie
PEER_TO_PEER_PATTERN.md              # Peer-to-peer
FEDERATION_PATTERN.md                # Federace
DELEGATION_PATTERN.md                # Delegace
COLLABORATION_PATTERN.md             # Kolaborace
COMPETITION_PATTERN.md               # Kompetice
COOPERATION_PATTERN.md               # Kooperace
```

### LangGraph Specifické

```
LANGGRAPH_BASICS.md                  # LangGraph základy
LANGGRAPH_STATE_GRAPH.md             # StateGraph
LANGGRAPH_MESSAGE_GRAPH.md           # MessageGraph
LANGGRAPH_CONDITIONAL_EDGES.md       # Podmíněné hrany
LANGGRAPH_CYCLES.md                  # Cykly v grafech
LANGGRAPH_SUBGRAPHS.md               # Subgrafy
LANGGRAPH_CHECKPOINTING.md           # Checkpointing
LANGGRAPH_STREAMING.md               # Streaming
LANGGRAPH_PERSISTENCE.md             # Persistence
LANGGRAPH_DEBUGGING.md               # Debugging
```

---

## 📂 03-TOOLS/ — Nástroje a Integrace

### Tool Definice

```
TOOL_DEFINITION_GUIDE.md             # Průvodce definicí nástrojů
TOOL_SCHEMA.md                       # Tool schema specifikace
TOOL_VALIDATION.md                   # Validace nástrojů
TOOL_VERSIONING.md                   # Verzování nástrojů
TOOL_DISCOVERY.md                    # Tool discovery
TOOL_REGISTRATION.md                 # Registrace nástrojů
TOOL_COMPOSITION.md                  # Kompozice nástrojů
TOOL_CHAINING.md                     # Řetězení nástrojů
TOOL_SELECTION.md                    # Výběr nástrojů
TOOL_EXECUTION.md                    # Exekuce nástrojů
```

### Webové Nástroje

```
WEB_SEARCH_TOOL.md                   # Web search
WEB_SCRAPER_TOOL.md                  # Web scraper
WEB_CRAWLER_TOOL.md                  # Web crawler
URL_FETCHER_TOOL.md                  # URL fetcher
RSS_READER_TOOL.md                   # RSS reader
SITEMAP_PARSER_TOOL.md               # Sitemap parser
SCREENSHOT_TOOL.md                   # Screenshot tool
PDF_DOWNLOADER_TOOL.md               # PDF downloader
API_CALLER_TOOL.md                   # API caller
GRAPHQL_TOOL.md                      # GraphQL tool
```

### Databázové Nástroje

```
SQL_QUERY_TOOL.md                    # SQL query
NOSQL_TOOL.md                        # NoSQL operations
VECTOR_DB_TOOL.md                    # Vector database
GRAPH_DB_TOOL.md                     # Graph database
REDIS_TOOL.md                        # Redis operations
ELASTICSEARCH_TOOL.md                # Elasticsearch
MONGODB_TOOL.md                      # MongoDB
POSTGRESQL_TOOL.md                   # PostgreSQL
SQLITE_TOOL.md                       # SQLite
DATABASE_MIGRATION_TOOL.md           # Database migration
```

### Souborové Nástroje

```
FILE_READER_TOOL.md                  # File reader
FILE_WRITER_TOOL.md                  # File writer
FILE_MANAGER_TOOL.md                 # File manager
DIRECTORY_TOOL.md                    # Directory operations
ZIP_TOOL.md                          # ZIP operations
CSV_TOOL.md                          # CSV processing
JSON_TOOL.md                         # JSON processing
XML_TOOL.md                          # XML processing
YAML_TOOL.md                         # YAML processing
EXCEL_TOOL.md                        # Excel processing
PDF_TOOL.md                          # PDF processing
MARKDOWN_TOOL.md                     # Markdown processing
```

### Vývojářské Nástroje

```
CODE_EXECUTOR_TOOL.md                # Code executor
PYTHON_REPL_TOOL.md                  # Python REPL
SHELL_TOOL.md                        # Shell commands
GIT_TOOL.md                          # Git operations
DOCKER_TOOL.md                       # Docker operations
KUBERNETES_TOOL.md                   # Kubernetes
TERRAFORM_TOOL.md                    # Terraform
ANSIBLE_TOOL.md                      # Ansible
CI_CD_TOOL.md                        # CI/CD tools
PACKAGE_MANAGER_TOOL.md              # Package managers
```

### Komunikační Nástroje

```
EMAIL_TOOL.md                        # Email operations
SLACK_TOOL.md                        # Slack integration
TEAMS_TOOL.md                        # MS Teams
DISCORD_TOOL.md                      # Discord
TELEGRAM_TOOL.md                     # Telegram
WHATSAPP_TOOL.md                     # WhatsApp
SMS_TOOL.md                          # SMS
WEBHOOK_TOOL.md                      # Webhooks
NOTIFICATION_TOOL.md                 # Notifications
CALENDAR_TOOL.md                     # Calendar operations
```

### AI/ML Nástroje

```
LLM_TOOL.md                          # LLM calls
EMBEDDING_TOOL.md                    # Embeddings
IMAGE_GENERATION_TOOL.md             # Image generation
SPEECH_TO_TEXT_TOOL.md               # Speech to text
TEXT_TO_SPEECH_TOOL.md               # Text to speech
VISION_TOOL.md                       # Computer vision
NLP_TOOL.md                          # NLP operations
CLASSIFICATION_TOOL.md               # Classification
SUMMARIZATION_TOOL.md                # Summarization
TRANSLATION_TOOL.md                  # Translation
```

### Matematické Nástroje

```
CALCULATOR_TOOL.md                   # Calculator
WOLFRAM_ALPHA_TOOL.md                # Wolfram Alpha
STATISTICS_TOOL.md                   # Statistics
SYMBOLIC_MATH_TOOL.md                # Symbolic math
OPTIMIZATION_TOOL.md                 # Optimization
LINEAR_ALGEBRA_TOOL.md               # Linear algebra
GRAPH_THEORY_TOOL.md                 # Graph theory
PROBABILITY_TOOL.md                  # Probability
FINANCIAL_MATH_TOOL.md               # Financial math
UNIT_CONVERTER_TOOL.md               # Unit conversion
```

### Cloudové Nástroje

```
AWS_TOOL.md                          # AWS services
GCP_TOOL.md                          # Google Cloud
AZURE_TOOL.md                        # Azure services
S3_TOOL.md                           # S3 operations
CLOUDFLARE_TOOL.md                   # Cloudflare
VERCEL_TOOL.md                       # Vercel
NETLIFY_TOOL.md                      # Netlify
HEROKU_TOOL.md                       # Heroku
DIGITALOCEAN_TOOL.md                 # DigitalOcean
LAMBDA_TOOL.md                       # Serverless functions
```

### Business Nástroje

```
CRM_TOOL.md                          # CRM operations
ERP_TOOL.md                          # ERP operations
SALESFORCE_TOOL.md                   # Salesforce
HUBSPOT_TOOL.md                      # HubSpot
JIRA_TOOL.md                         # Jira
ASANA_TOOL.md                        # Asana
TRELLO_TOOL.md                       # Trello
NOTION_TOOL.md                       # Notion
AIRTABLE_TOOL.md                     # Airtable
GOOGLE_WORKSPACE_TOOL.md             # Google Workspace
```

---

## 📂 04-STATE/ — State Management

### Základy State

```
STATE_FUNDAMENTALS.md                # Základy state
STATE_SCHEMA.md                      # State schema design
STATE_TYPING.md                      # Typování state
STATE_VALIDATION.md                  # Validace state
STATE_INITIALIZATION.md              # Inicializace
STATE_MUTATION.md                    # Mutace state
STATE_IMMUTABILITY.md                # Immutabilita
STATE_VERSIONING.md                  # Verzování
STATE_MIGRATION.md                   # Migrace state
STATE_SERIALIZATION.md               # Serializace
```

### Reducery a Operátory

```
REDUCERS_OVERVIEW.md                 # Přehled reducerů
ADD_MESSAGES_REDUCER.md              # add_messages
MERGE_DICTS_REDUCER.md               # merge_dicts
APPEND_REDUCER.md                    # append reducer
INCREMENT_REDUCER.md                 # increment reducer
CUSTOM_REDUCERS.md                   # Custom reducery
OPERATOR_COMPOSITION.md              # Kompozice operátorů
BINARY_OPERATORS.md                  # Binární operátory
AGGREGATE_OPERATORS.md               # Agregační operátory
FILTER_OPERATORS.md                  # Filter operátory
TRANSFORM_OPERATORS.md               # Transform operátory
```

### Channels

```
CHANNELS_OVERVIEW.md                 # Přehled channels
LAST_VALUE_CHANNEL.md                # LastValue channel
TOPIC_CHANNEL.md                     # Topic channel
AGGREGATE_CHANNEL.md                 # Aggregate channel
BROADCAST_CHANNEL.md                 # Broadcast channel
BUFFER_CHANNEL.md                    # Buffer channel
PRIORITY_CHANNEL.md                  # Priority channel
EPHEMERAL_CHANNEL.md                 # Ephemeral channel
PERSISTENT_CHANNEL.md                # Persistent channel
SCOPED_CHANNEL.md                    # Scoped channel
```

### Persistence

```
PERSISTENCE_STRATEGIES.md            # Strategie persistence
MEMORY_PERSISTENCE.md                # In-memory persistence
SQLITE_PERSISTENCE.md                # SQLite persistence
POSTGRESQL_PERSISTENCE.md            # PostgreSQL persistence
REDIS_PERSISTENCE.md                 # Redis persistence
S3_PERSISTENCE.md                    # S3 persistence
CHECKPOINTING.md                     # Checkpointing
SNAPSHOTTING.md                      # Snapshotting
RECOVERY.md                          # Recovery strategie
BACKUP_RESTORE.md                    # Backup a restore
```

### Pokročilý State

```
STATE_SCOPING.md                     # Scoping state
GLOBAL_STATE.md                      # Globální state
LOCAL_STATE.md                       # Lokální state
SHARED_STATE.md                      # Sdílený state
PRIVATE_STATE.md                     # Privátní state
STATE_ISOLATION.md                   # Izolace state
STATE_SYNCHRONIZATION.md             # Synchronizace
STATE_CONFLICT_RESOLUTION.md         # Řešení konfliktů
STATE_GARBAGE_COLLECTION.md          # Garbage collection
STATE_COMPRESSION.md                 # Komprese state
```

---

## 📂 05-MEMORY/ — Paměťové Systémy

### Typy Paměti

```
MEMORY_TYPES_OVERVIEW.md             # Přehled typů paměti
SHORT_TERM_MEMORY.md                 # Krátkodobá paměť
LONG_TERM_MEMORY.md                  # Dlouhodobá paměť
WORKING_MEMORY.md                    # Pracovní paměť
EPISODIC_MEMORY.md                   # Epizodická paměť
SEMANTIC_MEMORY.md                   # Sémantická paměť
PROCEDURAL_MEMORY.md                 # Procedurální paměť
SENSORY_MEMORY.md                    # Senzorická paměť
FLASH_MEMORY.md                      # Flash paměť
PROSPECTIVE_MEMORY.md                # Prospektivní paměť
```

### Implementace Paměti

```
CONVERSATION_MEMORY.md               # Konverzační paměť
BUFFER_MEMORY.md                     # Buffer memory
SUMMARY_MEMORY.md                    # Summary memory
ENTITY_MEMORY.md                     # Entity memory
KNOWLEDGE_GRAPH_MEMORY.md            # Knowledge graph memory
VECTOR_MEMORY.md                     # Vektorová paměť
HYBRID_MEMORY.md                     # Hybridní paměť
HIERARCHICAL_MEMORY.md               # Hierarchická paměť
ASSOCIATIVE_MEMORY.md                # Asociativní paměť
CONTEXTUAL_MEMORY.md                 # Kontextová paměť
```

### Memory Management

```
MEMORY_INDEXING.md                   # Indexování
MEMORY_RETRIEVAL.md                  # Retrieval strategie
MEMORY_COMPRESSION.md                # Komprese paměti
MEMORY_SUMMARIZATION.md              # Sumarizace
MEMORY_PRUNING.md                    # Pruning
MEMORY_CONSOLIDATION.md              # Konsolidace
MEMORY_DECAY.md                      # Decay strategie
MEMORY_IMPORTANCE_SCORING.md         # Importance scoring
MEMORY_RECENCY_SCORING.md            # Recency scoring
MEMORY_RELEVANCE_SCORING.md          # Relevance scoring
```

### Vektorové Databáze

```
VECTORDB_OVERVIEW.md                 # Přehled vector DB
PINECONE_INTEGRATION.md              # Pinecone
WEAVIATE_INTEGRATION.md              # Weaviate
CHROMA_INTEGRATION.md                # Chroma
MILVUS_INTEGRATION.md                # Milvus
QDRANT_INTEGRATION.md                # Qdrant
FAISS_INTEGRATION.md                 # FAISS
PGVECTOR_INTEGRATION.md              # pgvector
EMBEDDING_STRATEGIES.md              # Embedding strategie
SIMILARITY_SEARCH.md                 # Similarity search
HYBRID_SEARCH.md                     # Hybridní search
```

### RAG Systémy

```
RAG_FUNDAMENTALS.md                  # RAG základy
RAG_ARCHITECTURE.md                  # RAG architektura
RAG_CHUNKING.md                      # Chunking strategie
RAG_RETRIEVAL.md                     # Retrieval strategie
RAG_RERANKING.md                     # Reranking
RAG_GENERATION.md                    # Generation
RAG_EVALUATION.md                    # Evaluace RAG
RAG_OPTIMIZATION.md                  # Optimalizace
MULTI_HOP_RAG.md                     # Multi-hop RAG
SELF_RAG.md                          # Self-RAG
CORRECTIVE_RAG.md                    # Corrective RAG
```

---

## 📂 06-PROMPTS/ — Prompt Engineering

### Základy Promptů

```
PROMPT_FUNDAMENTALS.md               # Základy promptingu
PROMPT_ANATOMY.md                    # Anatomie promptu
PROMPT_COMPONENTS.md                 # Komponenty promptu
SYSTEM_PROMPTS.md                    # Systémové prompty
USER_PROMPTS.md                      # User prompty
ASSISTANT_PROMPTS.md                 # Assistant prompty
CONTEXT_INJECTION.md                 # Injekce kontextu
INSTRUCTION_DESIGN.md                # Design instrukcí
CONSTRAINT_SPECIFICATION.md          # Specifikace omezení
OUTPUT_FORMATTING.md                 # Formátování výstupu
```

### Prompt Techniky

```
ZERO_SHOT_PROMPTING.md               # Zero-shot
FEW_SHOT_PROMPTING.md                # Few-shot
CHAIN_OF_THOUGHT.md                  # Chain of thought
TREE_OF_THOUGHT.md                   # Tree of thought
GRAPH_OF_THOUGHT.md                  # Graph of thought
SELF_CONSISTENCY.md                  # Self-consistency
REACT_PROMPTING.md                   # ReAct
REFLEXION_PROMPTING.md               # Reflexion
SELF_ASK_PROMPTING.md                # Self-ask
LEAST_TO_MOST_PROMPTING.md           # Least-to-most
```

### Pokročilé Techniky

```
PROMPT_CHAINING.md                   # Řetězení promptů
PROMPT_DECOMPOSITION.md              # Dekompozice
PROMPT_COMPOSITION.md                # Kompozice
PROMPT_TEMPLATING.md                 # Templating
PROMPT_VARIABLES.md                  # Proměnné
PROMPT_CONDITIONALS.md               # Podmínky
PROMPT_LOOPS.md                      # Smyčky
PROMPT_FUNCTIONS.md                  # Funkce
META_PROMPTING.md                    # Meta prompting
PROMPT_OPTIMIZATION.md               # Optimalizace
```

### Role a Persona

```
ROLE_DEFINITION.md                   # Definice rolí
PERSONA_DESIGN.md                    # Design persony
EXPERTISE_SPECIFICATION.md           # Specifikace expertizy
TONE_AND_STYLE.md                    # Tón a styl
BEHAVIOR_GUIDELINES.md               # Behavioral guidelines
CONVERSATION_STYLE.md                # Konverzační styl
DOMAIN_EXPERTISE.md                  # Doménová expertiza
PERSONALITY_TRAITS.md                # Osobnostní rysy
COMMUNICATION_PREFERENCES.md         # Komunikační preference
RESPONSE_PATTERNS.md                 # Vzory odpovědí
```

### Validace a Testování

```
PROMPT_TESTING.md                    # Testování promptů
PROMPT_EVALUATION.md                 # Evaluace
PROMPT_DEBUGGING.md                  # Debugging
PROMPT_VERSIONING.md                 # Verzování
PROMPT_A_B_TESTING.md                # A/B testování
PROMPT_REGRESSION.md                 # Regresní testy
PROMPT_BENCHMARKING.md               # Benchmarking
PROMPT_METRICS.md                    # Metriky
PROMPT_QUALITY.md                    # Kvalita promptů
PROMPT_ITERATION.md                  # Iterace
```

---

## 📂 07-WORKFLOWS/ — Workflow Definice

### Základní Workflow

```
WORKFLOW_FUNDAMENTALS.md             # Základy workflow
WORKFLOW_DEFINITION.md               # Definice workflow
WORKFLOW_COMPONENTS.md               # Komponenty
WORKFLOW_TRIGGERS.md                 # Triggery
WORKFLOW_STEPS.md                    # Kroky workflow
WORKFLOW_TRANSITIONS.md              # Přechody
WORKFLOW_CONDITIONS.md               # Podmínky
WORKFLOW_ACTIONS.md                  # Akce
WORKFLOW_EVENTS.md                   # Události
WORKFLOW_STATES.md                   # Stavy workflow
```

### Typy Workflow

```
LINEAR_WORKFLOW.md                   # Lineární workflow
BRANCHING_WORKFLOW.md                # Větvící se workflow
PARALLEL_WORKFLOW.md                 # Paralelní workflow
ITERATIVE_WORKFLOW.md                # Iterativní workflow
CONDITIONAL_WORKFLOW.md              # Podmíněný workflow
LOOP_WORKFLOW.md                     # Smyčkový workflow
RECURSIVE_WORKFLOW.md                # Rekurzivní workflow
ADAPTIVE_WORKFLOW.md                 # Adaptivní workflow
DYNAMIC_WORKFLOW.md                  # Dynamický workflow
STATEFUL_WORKFLOW.md                 # Stateful workflow
```

### Workflow Patterny

```
APPROVAL_WORKFLOW.md                 # Schvalovací workflow
REVIEW_WORKFLOW.md                   # Review workflow
ESCALATION_WORKFLOW.md               # Eskalační workflow
NOTIFICATION_WORKFLOW.md             # Notifikační workflow
DATA_PIPELINE_WORKFLOW.md            # Data pipeline
ETL_WORKFLOW.md                      # ETL workflow
CONTENT_WORKFLOW.md                  # Content workflow
ONBOARDING_WORKFLOW.md               # Onboarding workflow
INCIDENT_WORKFLOW.md                 # Incident workflow
CHANGE_MANAGEMENT_WORKFLOW.md        # Change management
```

### Workflow Management

```
WORKFLOW_EXECUTION.md                # Exekuce workflow
WORKFLOW_MONITORING.md               # Monitoring
WORKFLOW_LOGGING.md                  # Logging
WORKFLOW_DEBUGGING.md                # Debugging
WORKFLOW_VERSIONING.md               # Verzování
WORKFLOW_ROLLBACK.md                 # Rollback
WORKFLOW_RECOVERY.md                 # Recovery
WORKFLOW_OPTIMIZATION.md             # Optimalizace
WORKFLOW_SCALING.md                  # Škálování
WORKFLOW_ANALYTICS.md                # Analytika
```

### Doménové Workflow

```
CODE_REVIEW_WORKFLOW.md              # Code review
CONTENT_CREATION_WORKFLOW.md         # Content creation
RESEARCH_WORKFLOW.md                 # Research workflow
DATA_ANALYSIS_WORKFLOW.md            # Data analysis
CUSTOMER_SUPPORT_WORKFLOW.md         # Customer support
SALES_WORKFLOW.md                    # Sales workflow
MARKETING_WORKFLOW.md                # Marketing workflow
HR_WORKFLOW.md                       # HR workflow
FINANCE_WORKFLOW.md                  # Finance workflow
LEGAL_WORKFLOW.md                    # Legal workflow
```

---

## 📂 08-EVALUATION/ — Testování a Evaluace

### Evaluační Metriky

```
EVALUATION_METRICS_OVERVIEW.md       # Přehled metrik
ACCURACY_METRICS.md                  # Accuracy metriky
PRECISION_RECALL.md                  # Precision/Recall
F1_SCORE.md                          # F1 score
BLEU_SCORE.md                        # BLEU score
ROUGE_SCORE.md                       # ROUGE score
PERPLEXITY.md                        # Perplexity
COHERENCE_METRICS.md                 # Coherence
RELEVANCE_METRICS.md                 # Relevance
FAITHFULNESS_METRICS.md              # Faithfulness
```

### Testovací Strategie

```
UNIT_TESTING_AGENTS.md               # Unit testy
INTEGRATION_TESTING.md               # Integrační testy
END_TO_END_TESTING.md                # E2E testy
REGRESSION_TESTING.md                # Regresní testy
SMOKE_TESTING.md                     # Smoke testy
LOAD_TESTING.md                      # Zátěžové testy
STRESS_TESTING.md                    # Stress testy
CHAOS_TESTING.md                     # Chaos testing
ADVERSARIAL_TESTING.md               # Adversarial testy
RED_TEAMING.md                       # Red teaming
```

### Evaluační Frameworky

```
LANGSMITH_EVALUATION.md              # LangSmith
RAGAS_EVALUATION.md                  # RAGAS
DEEPEVAL_EVALUATION.md               # DeepEval
PROMPTFOO_EVALUATION.md              # Promptfoo
TRULENS_EVALUATION.md                # TruLens
WEIGHTS_BIASES_EVAL.md               # Weights & Biases
MLFLOW_EVALUATION.md                 # MLflow
CUSTOM_EVALUATION.md                 # Custom evaluace
HUMAN_EVALUATION.md                  # Lidská evaluace
AUTOMATED_EVALUATION.md              # Automatická evaluace
```

### Benchmarking

```
BENCHMARK_DESIGN.md                  # Design benchmarků
BENCHMARK_DATASETS.md                # Benchmark datasety
BENCHMARK_EXECUTION.md               # Exekuce benchmarků
BENCHMARK_COMPARISON.md              # Porovnání
BENCHMARK_REPORTING.md               # Reporting
AGENT_BENCHMARKS.md                  # Agent benchmarky
RAG_BENCHMARKS.md                    # RAG benchmarky
TOOL_USE_BENCHMARKS.md               # Tool use benchmarky
REASONING_BENCHMARKS.md              # Reasoning benchmarky
SAFETY_BENCHMARKS.md                 # Safety benchmarky
```

### Kvalita a Compliance

```
QUALITY_ASSURANCE.md                 # Quality assurance
QUALITY_GATES.md                     # Quality gates
QUALITY_METRICS.md                   # Quality metriky
COMPLIANCE_TESTING.md                # Compliance testy
BIAS_TESTING.md                      # Bias testy
FAIRNESS_TESTING.md                  # Fairness testy
TOXICITY_TESTING.md                  # Toxicity testy
HALLUCINATION_TESTING.md             # Hallucination testy
GROUNDEDNESS_TESTING.md              # Groundedness
FACTUALITY_TESTING.md                # Factuality
```

---

## 📂 09-SECURITY/ — Bezpečnost

### Základy Bezpečnosti

```
SECURITY_FUNDAMENTALS.md             # Základy bezpečnosti
THREAT_MODELING.md                   # Threat modeling
ATTACK_VECTORS.md                    # Attack vektory
DEFENSE_STRATEGIES.md                # Obranné strategie
SECURITY_LAYERS.md                   # Bezpečnostní vrstvy
SECURITY_PRINCIPLES.md               # Principy
ZERO_TRUST_ARCHITECTURE.md           # Zero trust
DEFENSE_IN_DEPTH.md                  # Defense in depth
LEAST_PRIVILEGE.md                   # Least privilege
SECURITY_BY_DESIGN.md                # Security by design
```

### Prompt Bezpečnost

```
PROMPT_INJECTION.md                  # Prompt injection
JAILBREAKING.md                      # Jailbreaking
PROMPT_LEAKING.md                    # Prompt leaking
INDIRECT_INJECTION.md                # Indirect injection
CONTEXT_MANIPULATION.md              # Context manipulation
PROMPT_SANITIZATION.md               # Sanitizace promptů
INPUT_VALIDATION.md                  # Validace inputů
OUTPUT_VALIDATION.md                 # Validace outputů
CONTENT_FILTERING.md                 # Filtrování obsahu
GUARDRAILS.md                        # Guardrails
```

### Autentizace a Autorizace

```
AUTHENTICATION.md                    # Autentizace
AUTHORIZATION.md                     # Autorizace
RBAC.md                              # Role-based access
ABAC.md                              # Attribute-based access
API_KEY_MANAGEMENT.md                # API key management
TOKEN_MANAGEMENT.md                  # Token management
SESSION_MANAGEMENT.md                # Session management
IDENTITY_MANAGEMENT.md               # Identity management
SSO_INTEGRATION.md                   # SSO integrace
OAUTH_INTEGRATION.md                 # OAuth integrace
```

### Data Bezpečnost

```
DATA_ENCRYPTION.md                   # Šifrování dat
DATA_MASKING.md                      # Maskování dat
PII_PROTECTION.md                    # PII ochrana
DATA_ANONYMIZATION.md                # Anonymizace
DATA_RETENTION.md                    # Retence dat
DATA_DELETION.md                     # Mazání dat
SECURE_STORAGE.md                    # Bezpečné úložiště
SECURE_TRANSMISSION.md               # Bezpečný přenos
DATA_CLASSIFICATION.md               # Klasifikace dat
DATA_GOVERNANCE.md                   # Data governance
```

### Audit a Compliance

```
AUDIT_LOGGING.md                     # Audit logging
COMPLIANCE_FRAMEWORKS.md             # Compliance frameworky
GDPR_COMPLIANCE.md                   # GDPR
SOC2_COMPLIANCE.md                   # SOC2
HIPAA_COMPLIANCE.md                  # HIPAA
ISO27001_COMPLIANCE.md               # ISO 27001
INCIDENT_RESPONSE.md                 # Incident response
VULNERABILITY_MANAGEMENT.md          # Vulnerability mgmt
PENETRATION_TESTING.md               # Penetration testing
SECURITY_MONITORING.md               # Security monitoring
```

---

## 📂 10-DEPLOYMENT/ — Nasazení

### Deployment Strategie

```
DEPLOYMENT_STRATEGIES.md             # Deployment strategie
BLUE_GREEN_DEPLOYMENT.md             # Blue-green
CANARY_DEPLOYMENT.md                 # Canary
ROLLING_DEPLOYMENT.md                # Rolling
A_B_DEPLOYMENT.md                    # A/B deployment
FEATURE_FLAGS.md                     # Feature flags
GRADUAL_ROLLOUT.md                   # Gradual rollout
INSTANT_ROLLBACK.md                  # Instant rollback
ZERO_DOWNTIME.md                     # Zero downtime
MULTI_REGION.md                      # Multi-region
```

### Infrastruktura

```
INFRASTRUCTURE_OVERVIEW.md           # Přehled infrastruktury
CONTAINERIZATION.md                  # Kontejnerizace
DOCKER_DEPLOYMENT.md                 # Docker deployment
KUBERNETES_DEPLOYMENT.md             # Kubernetes
SERVERLESS_DEPLOYMENT.md             # Serverless
EDGE_DEPLOYMENT.md                   # Edge deployment
HYBRID_DEPLOYMENT.md                 # Hybrid deployment
CLOUD_DEPLOYMENT.md                  # Cloud deployment
ON_PREMISE_DEPLOYMENT.md             # On-premise
INFRASTRUCTURE_AS_CODE.md            # IaC
```

### CI/CD

```
CI_CD_OVERVIEW.md                    # CI/CD přehled
GITHUB_ACTIONS.md                    # GitHub Actions
GITLAB_CI.md                         # GitLab CI
JENKINS.md                           # Jenkins
CIRCLECI.md                          # CircleCI
AUTOMATED_TESTING.md                 # Automatizované testy
BUILD_PIPELINES.md                   # Build pipelines
RELEASE_PIPELINES.md                 # Release pipelines
ARTIFACT_MANAGEMENT.md               # Artifact management
ENVIRONMENT_MANAGEMENT.md            # Environment mgmt
```

### Škálování

```
SCALING_STRATEGIES.md                # Scaling strategie
HORIZONTAL_SCALING.md                # Horizontální scaling
VERTICAL_SCALING.md                  # Vertikální scaling
AUTO_SCALING.md                      # Auto-scaling
LOAD_BALANCING.md                    # Load balancing
CACHING_STRATEGIES.md                # Caching strategie
DATABASE_SCALING.md                  # DB scaling
MESSAGE_QUEUE_SCALING.md             # Message queue
RATE_LIMITING.md                     # Rate limiting
THROTTLING.md                        # Throttling
```

---

## 📂 11-MONITORING/ — Monitoring a Observability

### Observability Základy

```
OBSERVABILITY_FUNDAMENTALS.md        # Základy observability
THREE_PILLARS.md                     # Tři pilíře
METRICS_OVERVIEW.md                  # Metriky přehled
LOGS_OVERVIEW.md                     # Logy přehled
TRACES_OVERVIEW.md                   # Traces přehled
INSTRUMENTATION.md                   # Instrumentace
TELEMETRY.md                         # Telemetrie
CORRELATION.md                       # Korelace
CONTEXT_PROPAGATION.md               # Context propagation
SERVICE_MESH.md                      # Service mesh
```

### Metriky

```
SYSTEM_METRICS.md                    # Systémové metriky
APPLICATION_METRICS.md               # Aplikační metriky
BUSINESS_METRICS.md                  # Business metriky
AGENT_METRICS.md                     # Agent metriky
LLM_METRICS.md                       # LLM metriky
LATENCY_METRICS.md                   # Latency
THROUGHPUT_METRICS.md                # Throughput
ERROR_METRICS.md                     # Error rate
COST_METRICS.md                      # Cost metriky
CUSTOM_METRICS.md                    # Custom metriky
```

### Logging

```
LOGGING_BEST_PRACTICES.md            # Best practices
STRUCTURED_LOGGING.md                # Strukturované logy
LOG_LEVELS.md                        # Log levels
LOG_AGGREGATION.md                   # Agregace logů
LOG_ANALYSIS.md                      # Analýza logů
LOG_RETENTION.md                     # Retence logů
CONVERSATION_LOGGING.md              # Konverzační logy
TOOL_CALL_LOGGING.md                 # Tool call logy
ERROR_LOGGING.md                     # Error logy
AUDIT_LOGGING_DETAIL.md              # Audit logy detail
```

### Tracing

```
DISTRIBUTED_TRACING.md               # Distribuované tracing
SPAN_MANAGEMENT.md                   # Span management
TRACE_CONTEXT.md                     # Trace context
TRACE_SAMPLING.md                    # Sampling
TRACE_ANALYSIS.md                    # Trace analysis
OPENTELEMETRY.md                     # OpenTelemetry
JAEGER.md                            # Jaeger
ZIPKIN.md                            # Zipkin
LANGFUSE.md                          # Langfuse
LANGSMITH_TRACING.md                 # LangSmith tracing
```

### Alerting

```
ALERTING_STRATEGIES.md               # Alerting strategie
ALERT_RULES.md                       # Alert pravidla
ALERT_ROUTING.md                     # Alert routing
ALERT_ESCALATION.md                  # Eskalace
ON_CALL_MANAGEMENT.md                # On-call
INCIDENT_MANAGEMENT.md               # Incident mgmt
RUNBOOKS.md                          # Runbooks
POSTMORTEMS.md                       # Postmortems
SLA_MONITORING.md                    # SLA monitoring
ANOMALY_DETECTION.md                 # Anomaly detection
```

---

## 📂 12-INTEGRATIONS/ — Externí Integrace

### LLM Providers

```
OPENAI_INTEGRATION.md                # OpenAI
ANTHROPIC_INTEGRATION.md             # Anthropic
GOOGLE_AI_INTEGRATION.md             # Google AI
AZURE_OPENAI_INTEGRATION.md          # Azure OpenAI
AWS_BEDROCK_INTEGRATION.md           # AWS Bedrock
COHERE_INTEGRATION.md                # Cohere
MISTRAL_INTEGRATION.md               # Mistral
LLAMA_INTEGRATION.md                 # Llama
OLLAMA_INTEGRATION.md                # Ollama
LOCAL_LLM_INTEGRATION.md             # Local LLMs
```

### Framework Integrace

```
LANGCHAIN_INTEGRATION.md             # LangChain
LANGGRAPH_INTEGRATION.md             # LangGraph
LLAMAINDEX_INTEGRATION.md            # LlamaIndex
HAYSTACK_INTEGRATION.md              # Haystack
SEMANTIC_KERNEL_INTEGRATION.md       # Semantic Kernel
AUTOGEN_INTEGRATION.md               # AutoGen
CREWAI_INTEGRATION.md                # CrewAI
DSPY_INTEGRATION.md                  # DSPy
GUIDANCE_INTEGRATION.md              # Guidance
OUTLINES_INTEGRATION.md              # Outlines
```

### Datové Zdroje

```
DATABASE_INTEGRATIONS.md             # Databáze
API_INTEGRATIONS.md                  # API integrace
FILE_SYSTEM_INTEGRATION.md           # File systém
CLOUD_STORAGE_INTEGRATION.md         # Cloud storage
DATA_WAREHOUSE_INTEGRATION.md        # Data warehouse
DATA_LAKE_INTEGRATION.md             # Data lake
STREAMING_INTEGRATION.md             # Streaming data
MESSAGE_QUEUE_INTEGRATION.md         # Message queues
EVENT_BUS_INTEGRATION.md             # Event bus
WEBHOOK_INTEGRATION.md               # Webhooks
```

### Business Systémy

```
CRM_INTEGRATIONS.md                  # CRM systémy
ERP_INTEGRATIONS.md                  # ERP systémy
TICKETING_INTEGRATIONS.md            # Ticketing
PROJECT_MANAGEMENT_INTEGRATIONS.md   # Project management
COMMUNICATION_INTEGRATIONS.md        # Komunikace
DOCUMENT_MANAGEMENT_INTEGRATIONS.md  # Document mgmt
ANALYTICS_INTEGRATIONS.md            # Analytics
MARKETING_INTEGRATIONS.md            # Marketing tools
FINANCE_INTEGRATIONS.md              # Finance tools
HR_INTEGRATIONS.md                   # HR systémy
```

### Protokoly

```
REST_API_INTEGRATION.md              # REST API
GRAPHQL_INTEGRATION.md               # GraphQL
GRPC_INTEGRATION.md                  # gRPC
WEBSOCKET_INTEGRATION.md             # WebSocket
SSE_INTEGRATION.md                   # Server-Sent Events
MQTT_INTEGRATION.md                  # MQTT
AMQP_INTEGRATION.md                  # AMQP
KAFKA_INTEGRATION.md                 # Kafka
REDIS_PUBSUB_INTEGRATION.md          # Redis Pub/Sub
NATS_INTEGRATION.md                  # NATS
```

---

## 📂 13-PATTERNS/ — Design Patterns

### Architektonické Patterny

```
MICROSERVICES_PATTERN.md             # Microservices
MONOLITH_PATTERN.md                  # Monolith
MODULAR_MONOLITH_PATTERN.md          # Modular monolith
EVENT_SOURCING_PATTERN.md            # Event sourcing
CQRS_PATTERN.md                      # CQRS
HEXAGONAL_ARCHITECTURE.md            # Hexagonal
CLEAN_ARCHITECTURE.md                # Clean architecture
LAYERED_ARCHITECTURE.md              # Layered
DOMAIN_DRIVEN_DESIGN.md              # DDD
ACTOR_MODEL_PATTERN.md               # Actor model
```

### Behavioral Patterny

```
STRATEGY_PATTERN.md                  # Strategy
OBSERVER_PATTERN.md                  # Observer
COMMAND_PATTERN.md                   # Command
STATE_PATTERN.md                     # State
CHAIN_OF_RESPONSIBILITY.md           # Chain of responsibility
MEDIATOR_PATTERN.md                  # Mediator
VISITOR_PATTERN.md                   # Visitor
INTERPRETER_PATTERN.md               # Interpreter
MEMENTO_PATTERN.md                   # Memento
TEMPLATE_METHOD_PATTERN.md           # Template method
```

### Creational Patterny

```
FACTORY_PATTERN.md                   # Factory
ABSTRACT_FACTORY_PATTERN.md          # Abstract factory
BUILDER_PATTERN.md                   # Builder
PROTOTYPE_PATTERN.md                 # Prototype
SINGLETON_PATTERN.md                 # Singleton
OBJECT_POOL_PATTERN.md               # Object pool
DEPENDENCY_INJECTION.md              # Dependency injection
SERVICE_LOCATOR_PATTERN.md           # Service locator
LAZY_INITIALIZATION_PATTERN.md       # Lazy initialization
MULTITON_PATTERN.md                  # Multiton
```

### Structural Patterny

```
ADAPTER_PATTERN.md                   # Adapter
BRIDGE_PATTERN.md                    # Bridge
COMPOSITE_PATTERN.md                 # Composite
DECORATOR_PATTERN.md                 # Decorator
FACADE_PATTERN.md                    # Facade
FLYWEIGHT_PATTERN.md                 # Flyweight
PROXY_PATTERN.md                     # Proxy
MODULE_PATTERN.md                    # Module
PLUGIN_PATTERN.md                    # Plugin
EXTENSION_PATTERN.md                 # Extension
```

### Agent-Specific Patterny

```
REFLECTION_PATTERN.md                # Reflection
PLANNING_PATTERN.md                  # Planning
TOOL_USE_PATTERN.md                  # Tool use
MEMORY_PATTERN.md                    # Memory
MULTI_AGENT_PATTERN.md               # Multi-agent
SELF_IMPROVEMENT_PATTERN.md          # Self-improvement
GOAL_ORIENTED_PATTERN.md             # Goal-oriented
REACTIVE_AGENT_PATTERN.md            # Reactive
DELIBERATIVE_AGENT_PATTERN.md        # Deliberative
HYBRID_AGENT_PATTERN.md              # Hybrid
```

---

## 📂 14-TEMPLATES/ — Šablony

### Agent Šablony

```
BASIC_AGENT_TEMPLATE.md              # Základní agent
CONVERSATIONAL_AGENT_TEMPLATE.md     # Konverzační agent
TASK_AGENT_TEMPLATE.md               # Task agent
RESEARCH_AGENT_TEMPLATE.md           # Research agent
CODING_AGENT_TEMPLATE.md             # Coding agent
ANALYSIS_AGENT_TEMPLATE.md           # Analysis agent
CREATIVE_AGENT_TEMPLATE.md           # Creative agent
SUPERVISOR_AGENT_TEMPLATE.md         # Supervisor
SPECIALIST_AGENT_TEMPLATE.md         # Specialist
GENERALIST_AGENT_TEMPLATE.md         # Generalist
```

### Workflow Šablony

```
LINEAR_WORKFLOW_TEMPLATE.md          # Linear workflow
BRANCHING_WORKFLOW_TEMPLATE.md       # Branching workflow
PARALLEL_WORKFLOW_TEMPLATE.md        # Parallel workflow
APPROVAL_WORKFLOW_TEMPLATE.md        # Approval workflow
REVIEW_WORKFLOW_TEMPLATE.md          # Review workflow
ESCALATION_WORKFLOW_TEMPLATE.md      # Escalation workflow
NOTIFICATION_WORKFLOW_TEMPLATE.md    # Notification workflow
DATA_PIPELINE_TEMPLATE.md            # Data pipeline
ETL_WORKFLOW_TEMPLATE.md             # ETL workflow
MULTI_AGENT_WORKFLOW_TEMPLATE.md     # Multi-agent workflow
```

### Prompt Šablony

```
SYSTEM_PROMPT_TEMPLATE.md            # System prompt
INSTRUCTION_PROMPT_TEMPLATE.md       # Instruction prompt
FEW_SHOT_TEMPLATE.md                 # Few-shot template
COT_TEMPLATE.md                      # Chain of thought
REACT_TEMPLATE.md                    # ReAct template
ROLE_PROMPT_TEMPLATE.md              # Role prompt
TASK_PROMPT_TEMPLATE.md              # Task prompt
OUTPUT_PROMPT_TEMPLATE.md            # Output format
VALIDATION_PROMPT_TEMPLATE.md        # Validation prompt
ERROR_PROMPT_TEMPLATE.md             # Error handling prompt
```

---

## 📂 15-EXAMPLES/ — Příklady

### Jednoduché Příklady

```
HELLO_WORLD_AGENT.md                 # Hello world
SIMPLE_CHATBOT.md                    # Simple chatbot
SIMPLE_QA_BOT.md                     # Q&A bot
SIMPLE_CALCULATOR.md                 # Calculator
SIMPLE_TRANSLATOR.md                 # Translator
SIMPLE_SUMMARIZER.md                 # Summarizer
SIMPLE_CLASSIFIER.md                 # Classifier
SIMPLE_EXTRACTOR.md                  # Extractor
SIMPLE_GENERATOR.md                  # Generator
SIMPLE_VALIDATOR.md                  # Validator
```

### Střední Příklady

```
RESEARCH_ASSISTANT.md                # Research assistant
CODE_ASSISTANT.md                    # Code assistant
WRITING_ASSISTANT.md                 # Writing assistant
DATA_ANALYST_EXAMPLE.md              # Data analyst
CUSTOMER_SUPPORT_BOT.md              # Support bot
SALES_ASSISTANT.md                   # Sales assistant
HR_ASSISTANT.md                      # HR assistant
LEGAL_ASSISTANT.md                   # Legal assistant
FINANCE_ASSISTANT.md                 # Finance assistant
MARKETING_ASSISTANT.md               # Marketing assistant
```

### Pokročilé Příklady

```
MULTI_AGENT_RESEARCH.md              # Multi-agent research
MULTI_AGENT_DEVELOPMENT.md           # Multi-agent dev
AUTONOMOUS_CODER.md                  # Autonomous coder
AUTONOMOUS_RESEARCHER.md             # Autonomous researcher
SELF_IMPROVING_AGENT.md              # Self-improving
ADAPTIVE_ASSISTANT.md                # Adaptive assistant
COMPLEX_WORKFLOW.md                  # Complex workflow
ENTERPRISE_AGENT.md                  # Enterprise agent
PRODUCTION_READY_AGENT.md            # Production-ready
SCALABLE_MULTI_AGENT.md              # Scalable multi-agent
```

### Use Case Příklady

```
DOCUMENT_PROCESSING.md               # Document processing
EMAIL_AUTOMATION.md                  # Email automation
MEETING_SUMMARIZATION.md             # Meeting summarization
LEAD_QUALIFICATION.md                # Lead qualification
CONTENT_MODERATION.md                # Content moderation
FRAUD_DETECTION.md                   # Fraud detection
RECOMMENDATION_ENGINE.md             # Recommendations
KNOWLEDGE_BASE_QA.md                 # Knowledge base Q&A
CODE_REVIEW_AUTOMATION.md            # Code review
INCIDENT_RESPONSE.md                 # Incident response
```

---

## 📂 16-CONFIG/ — Konfigurace

### Agent Konfigurace

```
AGENT_CONFIG_SCHEMA.md               # Agent config schema
MODEL_CONFIG.md                      # Model konfigurace
TEMPERATURE_SETTINGS.md              # Temperature
TOKEN_LIMITS.md                      # Token limits
TIMEOUT_CONFIG.md                    # Timeouty
RETRY_CONFIG.md                      # Retry konfigurace
RATE_LIMIT_CONFIG.md                 # Rate limiting
COST_LIMITS.md                       # Cost limits
FEATURE_FLAGS_CONFIG.md              # Feature flags
ENVIRONMENT_CONFIG.md                # Environment config
```

### Workflow Konfigurace

```
WORKFLOW_CONFIG_SCHEMA.md            # Workflow schema
STEP_CONFIG.md                       # Step konfigurace
TRANSITION_CONFIG.md                 # Transition config
CONDITION_CONFIG.md                  # Condition config
ACTION_CONFIG.md                     # Action config
TRIGGER_CONFIG.md                    # Trigger config
SCHEDULE_CONFIG.md                   # Schedule config
NOTIFICATION_CONFIG.md               # Notification config
INTEGRATION_CONFIG.md                # Integration config
MONITORING_CONFIG.md                 # Monitoring config
```

### Deployment Konfigurace

```
DOCKER_CONFIG.md                     # Docker config
KUBERNETES_CONFIG.md                 # Kubernetes config
TERRAFORM_CONFIG.md                  # Terraform config
ANSIBLE_CONFIG.md                    # Ansible config
CI_CD_CONFIG.md                      # CI/CD config
SECRETS_CONFIG.md                    # Secrets management
LOGGING_CONFIG.md                    # Logging config
METRICS_CONFIG.md                    # Metrics config
ALERTING_CONFIG.md                   # Alerting config
SCALING_CONFIG.md                    # Scaling config
```

---

## 📂 17-KNOWLEDGE/ — Knowledge Management

### Knowledge Bases

```
KNOWLEDGE_BASE_DESIGN.md             # KB design
KNOWLEDGE_ORGANIZATION.md            # Organizace znalostí
KNOWLEDGE_REPRESENTATION.md          # Reprezentace
ONTOLOGY_DESIGN.md                   # Ontologie
TAXONOMY_DESIGN.md                   # Taxonomie
SCHEMA_DESIGN.md                     # Schema design
ENTITY_MODELING.md                   # Entity modeling
RELATIONSHIP_MODELING.md             # Relationship modeling
ATTRIBUTE_MODELING.md                # Attribute modeling
CONSTRAINT_MODELING.md               # Constraint modeling
```

### Knowledge Graphs

```
KNOWLEDGE_GRAPH_FUNDAMENTALS.md      # KG základy
GRAPH_CONSTRUCTION.md                # Konstrukce grafu
ENTITY_EXTRACTION.md                 # Entity extraction
RELATION_EXTRACTION.md               # Relation extraction
ENTITY_LINKING.md                    # Entity linking
COREFERENCE_RESOLUTION.md            # Coreference
GRAPH_EMBEDDING.md                   # Graph embedding
GRAPH_QUERYING.md                    # Graph querying
GRAPH_REASONING.md                   # Graph reasoning
GRAPH_COMPLETION.md                  # Graph completion
```

### Knowledge Acquisition

```
KNOWLEDGE_EXTRACTION.md              # Knowledge extraction
DOCUMENT_PARSING.md                  # Document parsing
STRUCTURED_DATA_EXTRACTION.md        # Structured extraction
UNSTRUCTURED_DATA_EXTRACTION.md      # Unstructured extraction
WEB_SCRAPING_KNOWLEDGE.md            # Web scraping
API_DATA_INGESTION.md                # API ingestion
DATABASE_INTEGRATION.md              # Database integration
MANUAL_CURATION.md                   # Manual curation
CROWDSOURCING.md                     # Crowdsourcing
EXPERT_ELICITATION.md                # Expert elicitation
```

### Knowledge Maintenance

```
KNOWLEDGE_VALIDATION.md              # Validace
KNOWLEDGE_VERSIONING.md              # Verzování
KNOWLEDGE_UPDATE.md                  # Aktualizace
KNOWLEDGE_DEPRECATION.md             # Deprecation
KNOWLEDGE_ARCHIVAL.md                # Archivace
KNOWLEDGE_QUALITY.md                 # Kvalita
KNOWLEDGE_CONSISTENCY.md             # Konzistence
KNOWLEDGE_COMPLETENESS.md            # Úplnost
KNOWLEDGE_FRESHNESS.md               # Freshness
KNOWLEDGE_GOVERNANCE.md              # Governance
```

---

## 📂 18-HUMAN-LOOP/ — Human-in-the-Loop

### HITL Základy

```
HITL_FUNDAMENTALS.md                 # HITL základy
HITL_PATTERNS.md                     # HITL patterny
HUMAN_AGENT_INTERACTION.md           # Human-agent interaction
ESCALATION_DESIGN.md                 # Escalation design
HANDOFF_PROTOCOLS.md                 # Handoff protokoly
FEEDBACK_LOOPS.md                    # Feedback loops
APPROVAL_WORKFLOWS.md                # Approval workflows
REVIEW_PROCESSES.md                  # Review procesy
OVERRIDE_MECHANISMS.md               # Override mechanismy
FALLBACK_STRATEGIES.md               # Fallback strategie
```

### User Interfaces

```
CHAT_INTERFACES.md                   # Chat interfaces
DASHBOARD_DESIGN.md                  # Dashboard design
NOTIFICATION_DESIGN.md               # Notification design
FORM_DESIGN.md                       # Form design
WIZARD_DESIGN.md                     # Wizard design
REVIEW_INTERFACES.md                 # Review interfaces
APPROVAL_INTERFACES.md               # Approval interfaces
CONFIGURATION_UI.md                  # Configuration UI
MONITORING_UI.md                     # Monitoring UI
ANALYTICS_UI.md                      # Analytics UI
```

### Feedback a Učení

```
FEEDBACK_COLLECTION.md               # Feedback collection
IMPLICIT_FEEDBACK.md                 # Implicit feedback
EXPLICIT_FEEDBACK.md                 # Explicit feedback
PREFERENCE_LEARNING.md               # Preference learning
RLHF_BASICS.md                       # RLHF basics
ACTIVE_LEARNING.md                   # Active learning
CORRECTION_MECHANISMS.md             # Correction mechanisms
CONTINUOUS_IMPROVEMENT.md            # Continuous improvement
A_B_TESTING_HITL.md                  # A/B testing
USER_RESEARCH.md                     # User research
```

---

## 📂 19-MULTIMODAL/ — Multimodální Agenti

### Vision

```
VISION_FUNDAMENTALS.md               # Vision základy
IMAGE_UNDERSTANDING.md               # Image understanding
OBJECT_DETECTION.md                  # Object detection
IMAGE_CLASSIFICATION.md              # Image classification
IMAGE_SEGMENTATION.md                # Image segmentation
OCR_INTEGRATION.md                   # OCR
DOCUMENT_VISION.md                   # Document vision
CHART_UNDERSTANDING.md               # Chart understanding
DIAGRAM_UNDERSTANDING.md             # Diagram understanding
SCREENSHOT_ANALYSIS.md               # Screenshot analysis
```

### Audio

```
AUDIO_FUNDAMENTALS.md                # Audio základy
SPEECH_RECOGNITION.md                # Speech recognition
SPEAKER_IDENTIFICATION.md            # Speaker identification
EMOTION_DETECTION.md                 # Emotion detection
AUDIO_CLASSIFICATION.md              # Audio classification
MUSIC_ANALYSIS.md                    # Music analysis
SOUND_DETECTION.md                   # Sound detection
TRANSCRIPTION.md                     # Transcription
AUDIO_GENERATION.md                  # Audio generation
TEXT_TO_SPEECH.md                    # Text to speech
```

### Video

```
VIDEO_FUNDAMENTALS.md                # Video základy
VIDEO_UNDERSTANDING.md               # Video understanding
TEMPORAL_ANALYSIS.md                 # Temporal analysis
ACTION_RECOGNITION.md                # Action recognition
SCENE_DETECTION.md                   # Scene detection
VIDEO_SUMMARIZATION.md               # Video summarization
VIDEO_QA.md                          # Video Q&A
VIDEO_GENERATION.md                  # Video generation
LIVE_VIDEO_PROCESSING.md             # Live video
VIDEO_SEARCH.md                      # Video search
```

### Multimodal Fusion

```
MULTIMODAL_FUSION.md                 # Fusion strategie
EARLY_FUSION.md                      # Early fusion
LATE_FUSION.md                       # Late fusion
CROSS_MODAL_ATTENTION.md             # Cross-modal attention
MULTIMODAL_EMBEDDING.md              # Multimodal embeddings
MULTIMODAL_RETRIEVAL.md              # Multimodal retrieval
MULTIMODAL_GENERATION.md             # Multimodal generation
MULTIMODAL_REASONING.md              # Multimodal reasoning
MULTIMODAL_AGENTS.md                 # Multimodal agents
MULTIMODAL_WORKFLOWS.md              # Multimodal workflows
```

---

## 📂 20-ADVANCED/ — Pokročilé Koncepty

### Reasoning

```
REASONING_FUNDAMENTALS.md            # Reasoning základy
DEDUCTIVE_REASONING.md               # Deduktivní
INDUCTIVE_REASONING.md               # Induktivní
ABDUCTIVE_REASONING.md               # Abduktivní
ANALOGICAL_REASONING.md              # Analogické
CAUSAL_REASONING.md                  # Kauzální
TEMPORAL_REASONING.md                # Temporální
SPATIAL_REASONING.md                 # Prostorové
PROBABILISTIC_REASONING.md           # Pravděpodobnostní
COMMON_SENSE_REASONING.md            # Common sense
```

### Planning

```
PLANNING_FUNDAMENTALS.md             # Planning základy
GOAL_DECOMPOSITION.md                # Goal decomposition
TASK_PLANNING.md                     # Task planning
HIERARCHICAL_PLANNING.md             # Hierarchical planning
TEMPORAL_PLANNING.md                 # Temporal planning
RESOURCE_PLANNING.md                 # Resource planning
CONTINGENCY_PLANNING.md              # Contingency planning
REPLANNING.md                        # Replanning
PLAN_EXECUTION.md                    # Plan execution
PLAN_MONITORING.md                   # Plan monitoring
```

### Self-Improvement

```
SELF_REFLECTION.md                   # Self-reflection
SELF_CRITIQUE.md                     # Self-critique
SELF_CORRECTION.md                   # Self-correction
SELF_IMPROVEMENT.md                  # Self-improvement
META_LEARNING.md                     # Meta-learning
CONTINUAL_LEARNING.md                # Continual learning
TRANSFER_LEARNING.md                 # Transfer learning
FEW_SHOT_LEARNING.md                 # Few-shot learning
ZERO_SHOT_LEARNING.md                # Zero-shot learning
CURRICULUM_LEARNING.md               # Curriculum learning
```

### Autonomy

```
AUTONOMY_LEVELS.md                   # Úrovně autonomie
GOAL_SETTING.md                      # Goal setting
DECISION_MAKING.md                   # Decision making
INITIATIVE_TAKING.md                 # Initiative taking
SELF_DIRECTION.md                    # Self-direction
ADAPTIVE_BEHAVIOR.md                 # Adaptive behavior
PROACTIVE_BEHAVIOR.md                # Proactive behavior
RESOURCE_MANAGEMENT.md               # Resource management
TIME_MANAGEMENT.md                   # Time management
PRIORITY_MANAGEMENT.md               # Priority management
```

### Safety a Alignment

```
ALIGNMENT_FUNDAMENTALS.md            # Alignment základy
VALUE_ALIGNMENT.md                   # Value alignment
GOAL_ALIGNMENT.md                    # Goal alignment
REWARD_HACKING.md                    # Reward hacking
SPECIFICATION_GAMING.md              # Specification gaming
SIDE_EFFECTS.md                      # Side effects
CORRIGIBILITY.md                     # Corrigibility
INTERPRETABILITY.md                  # Interpretability
EXPLAINABILITY.md                    # Explainability
TRANSPARENCY.md                      # Transparency
```

---

## 📂 21-DOMAIN-SPECIFIC/ — Doménově Specifické

### Healthcare

```
HEALTHCARE_AGENTS.md                 # Healthcare agenti
MEDICAL_QA_AGENT.md                  # Medical Q&A
CLINICAL_DECISION_SUPPORT.md         # Clinical decision support
PATIENT_TRIAGE.md                    # Patient triage
SYMPTOM_CHECKER.md                   # Symptom checker
DRUG_INTERACTION.md                  # Drug interaction
MEDICAL_CODING.md                    # Medical coding
RADIOLOGY_ASSISTANT.md               # Radiology assistant
PATHOLOGY_ASSISTANT.md               # Pathology assistant
HEALTHCARE_COMPLIANCE.md             # Healthcare compliance
```

### Finance

```
FINANCE_AGENTS.md                    # Finance agenti
TRADING_AGENT.md                     # Trading agent
RISK_MANAGEMENT_AGENT.md             # Risk management
FRAUD_DETECTION_AGENT.md             # Fraud detection
CREDIT_SCORING_AGENT.md              # Credit scoring
PORTFOLIO_MANAGEMENT.md              # Portfolio management
FINANCIAL_ANALYSIS_AGENT.md          # Financial analysis
REGULATORY_COMPLIANCE_AGENT.md       # Regulatory compliance
TAX_ASSISTANT.md                     # Tax assistant
INSURANCE_AGENT.md                   # Insurance agent
```

### Legal

```
LEGAL_AGENTS.md                      # Legal agenti
CONTRACT_REVIEW_AGENT.md             # Contract review
LEGAL_RESEARCH_AGENT.md              # Legal research
DUE_DILIGENCE_AGENT.md               # Due diligence
COMPLIANCE_AGENT.md                  # Compliance
CASE_ANALYSIS_AGENT.md               # Case analysis
DOCUMENT_DRAFTING_AGENT.md           # Document drafting
E_DISCOVERY_AGENT.md                 # E-discovery
IP_ANALYSIS_AGENT.md                 # IP analysis
LEGAL_QA_AGENT.md                    # Legal Q&A
```

### E-commerce

```
ECOMMERCE_AGENTS.md                  # E-commerce agenti
PRODUCT_RECOMMENDATION_AGENT.md      # Product recommendations
CUSTOMER_SERVICE_AGENT.md            # Customer service
ORDER_MANAGEMENT_AGENT.md            # Order management
INVENTORY_AGENT.md                   # Inventory management
PRICING_AGENT.md                     # Pricing optimization
REVIEW_ANALYSIS_AGENT.md             # Review analysis
PERSONALIZATION_AGENT.md             # Personalization
CART_ABANDONMENT_AGENT.md            # Cart abandonment
RETURNS_AGENT.md                     # Returns handling
```

### Education

```
EDUCATION_AGENTS.md                  # Education agenti
TUTORING_AGENT.md                    # Tutoring
ASSESSMENT_AGENT.md                  # Assessment
CURRICULUM_AGENT.md                  # Curriculum design
FEEDBACK_AGENT.md                    # Student feedback
QUESTION_GENERATION_AGENT.md         # Question generation
EXPLANATION_AGENT.md                 # Explanation
STUDY_PLANNER_AGENT.md               # Study planner
LANGUAGE_LEARNING_AGENT.md           # Language learning
ADAPTIVE_LEARNING_AGENT.md           # Adaptive learning
```

### Manufacturing

```
MANUFACTURING_AGENTS.md              # Manufacturing agenti
QUALITY_CONTROL_AGENT.md             # Quality control
PREDICTIVE_MAINTENANCE_AGENT.md      # Predictive maintenance
SUPPLY_CHAIN_AGENT.md                # Supply chain
PRODUCTION_PLANNING_AGENT.md         # Production planning
DEFECT_DETECTION_AGENT.md            # Defect detection
PROCESS_OPTIMIZATION_AGENT.md        # Process optimization
SAFETY_MONITORING_AGENT.md           # Safety monitoring
INVENTORY_OPTIMIZATION_AGENT.md      # Inventory optimization
LOGISTICS_AGENT.md                   # Logistics
```

---

## 📊 STATISTIKY

| Kategorie | Počet souborů |
|-----------|---------------|
| 01-agents | 83 |
| 02-orchestration | 64 |
| 03-tools | 72 |
| 04-state | 40 |
| 05-memory | 51 |
| 06-prompts | 45 |
| 07-workflows | 55 |
| 08-evaluation | 40 |
| 09-security | 35 |
| 10-deployment | 30 |
| 11-monitoring | 35 |
| 12-integrations | 50 |
| 13-patterns | 45 |
| 14-templates | 30 |
| 15-examples | 40 |
| 16-config | 25 |
| 17-knowledge | 40 |
| 18-human-loop | 30 |
| 19-multimodal | 35 |
| 20-advanced | 50 |
| 21-domain-specific | 60 |
| **CELKEM** | **1005** |

---

## 🚀 DOPORUČENÉ POŘADÍ ČTENÍ

### Pro Začátečníky

1. `01-agents/AGENT_TEMPLATE.md`
2. `02-orchestration/ORCHESTRATION_OVERVIEW.md`
3. `03-tools/TOOL_DEFINITION_GUIDE.md`
4. `04-state/STATE_FUNDAMENTALS.md`
5. `06-prompts/PROMPT_FUNDAMENTALS.md`

### Pro Pokročilé

1. `02-orchestration/LANGGRAPH_BASICS.md`
2. `05-memory/RAG_FUNDAMENTALS.md`
3. `13-patterns/` - všechny soubory
4. `20-advanced/` - všechny soubory

### Pro Production

1. `08-evaluation/` - všechny soubory
2. `09-security/` - všechny soubory
3. `10-deployment/` - všechny soubory
4. `11-monitoring/` - všechny soubory

---

## 📝 POZNÁMKY

- Každý soubor by měl obsahovat:
  - Metadata (název, verze, autor)
  - Účel a použití
  - Prerekvizity
  - Detailní obsah
  - Příklady kódu
  - Best practices
  - Časté chyby
  - Související soubory

- Formát názvů souborů:
  - SCREAMING_SNAKE_CASE pro hlavní soubory
  - Přípona `.md` pro všechny soubory
  - Bez mezer a speciálních znaků

---

*Vygenerováno: 2025 | Verze: 1.0 | Autor: Claude*
