# ThreatBoard OSINT — MITRE ATT&CK Recon Visualizer

ThreatBoard OSINT is a simple, visual, and interactive tool that turns basic OSINT reconnaissance into a MITRE ATT&CK–mapped threat board.  
You enter a target (domain, keyword, or organization), the tool performs lightweight OSINT checks, and each finding is mapped to a corresponding ATT&CK technique.

This project demonstrates:

- Lightweight OSINT data collection  
- Mapping indicators to MITRE ATT&CK techniques  
- A clean React UI for visualizing threat patterns  
- A FastAPI backend with typed request/response models  
- A structured, scalable full‑stack architecture  

---

## 🚀 Features

### 🔍 Lightweight OSINT Recon
- Public mentions  
- Subdomain pattern detection  
- Possible credential exposure  
- Basic indicator extraction  

### 🧩 MITRE ATT&CK Mapping
- Subdomain → `T1595 Active Scanning`  
- Email/identity → `T1589 Gather Victim Identity Information`  

### 🎨 Visual Threat Board
- 5×5 grid  
- Activated tiles light up  
- Instant updates after scanning  

### 📡 API‑Driven Architecture
- FastAPI backend (`/api/scan`)  
- React + TypeScript frontend  
- Axios client  
- Strong typing across the stack  

---

# 🏗️ High‑Level Architecture

```mermaid
flowchart TD

    subgraph Frontend["Frontend (React + TypeScript)"]
        FE1["Components\nThreatBoard.tsx\nScanForm.tsx\nLayout.tsx"]
        FE2["Pages\nHome.tsx"]
        FE3["API Client\nclient.ts"]
        FE4["Types\napi.ts"]
    end

    subgraph Backend["Backend (FastAPI + Python)"]
        BE1["main.py\nApp entry + CORS"]
        BE2["schemas.py\nTyped models"]
        BE3["osint.py\nRecon logic"]
        BE4["mapping.py\nMITRE mapping"]
        BE5["mitre.py\nTechnique DB"]
    end

    subgraph Dataset["MITRE ATT&CK Dataset"]
        DB1["Local JSON or static rules"]
    end

    FE2 --> FE3
    FE3 --> BE1
    BE1 --> BE3
    BE1 --> BE4
    BE4 --> DB1
    BE3 --> BE4
    BE1 --> FE2
