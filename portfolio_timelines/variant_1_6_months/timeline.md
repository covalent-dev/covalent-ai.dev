# Portfolio Timeline: Variant 1 (6 Months)

## Theme: The AI Apprentice - Mastering the Fundamentals

**Narrative:** A highly-focused 6-month sprint to build a rock-solid foundation in AI/ML engineering. The goal is to go from zero to deploying real-world AI applications, demonstrating rapid learning and practical skills.

### Month 1-2: Core Foundations

*   **Focus:** Python for AI, Git, Docker, and first principles of LLMs.
*   **Projects:**
    *   **"Talk to Your Code" CLI:** A simple command-line tool that uses a local LLM (via Ollama) to answer questions about a codebase.
    *   **Containerized Notebooks:** A public GitHub repository with Dockerized Jupyter notebooks exploring different LLM concepts (embeddings, tokenization, etc.).
*   **Portfolio Evidence:**
    *   GitHub repo with the CLI tool, including a README with a demo GIF.
    *   GitHub repo with the notebooks.

### Month 3-4: Building the RAG

*   **Focus:** Retrieval-Augmented Generation (RAG), vector databases (Chroma), and building interactive UIs.
*   **Projects:**
    *   **Personal RAG Intelligence Agent:** A Streamlit application that allows querying a personal knowledge base (e.g., Markdown notes, articles).
    *   **"Doc Explorer" RAG:** A RAG system built for a specific open-source project's documentation, deployed as a public Streamlit app.
*   **Portfolio Evidence:**
    *   Live Streamlit app for the Personal RAG agent (password-protected if necessary).
    *   Live Streamlit app for the "Doc Explorer".
    *   Blog post: "How I Built My First RAG System in 30 Days."

### Month 5-6: Production & Automation

*   **Focus:** Basic DevOps, automation, and deploying multi-component systems.
*   **Projects:**
    *   **Agentic Data Processing Platform:** A multi-container Docker Compose application that:
        1.  Scrapes data from a source (e.g., an RSS feed).
        2.  Uses an LLM to rank and categorize the data.
        3.  Stores the results in a PostgreSQL database.
        4.  Presents the results in a simple FastAPI backend.
    *   **Production Monitoring Stack:** A simple monitoring setup using Prometheus and Grafana to track the health of the data processing platform.
*   **Portfolio Evidence:**
    *   GitHub repo for the data processing platform with a detailed README and `docker-compose.yml`.
    *   Live (or video demo) of the Grafana dashboard.
    *   Blog post: "Deploying a Multi-Container AI App with Docker Compose."
