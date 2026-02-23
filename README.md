# ThreatBoard_OSINT_MITRE
ThreatBoard OSINT is a simple, visual, and interactive tool that turns basic OSINT reconnaissance into a MITRE ATT&amp;CK‑mapped “threat board.” You enter a target (domain, keyword, or organization), the tool performs lightweight OSINT checks, and each finding is mapped to a corresponding ATT&amp;CK technique.

# ThreatBoard OSINT — MITRE ATT&CK Recon Visualizer

ThreatBoard OSINT is a lightweight, visual, and interactive web application that transforms basic OSINT reconnaissance into a MITRE ATT&CK–mapped threat board.  
It is designed to make threat modeling simple, intuitive, and even a little fun — without sacrificing technical accuracy.

This project demonstrates:
- OSINT data collection (lightweight, public‑only)
- Mapping indicators to MITRE ATT&CK techniques
- A clean React UI for visualizing threat patterns
- A FastAPI backend with typed request/response models
- A structured, scalable full‑stack architecture

---

## 🚀 Features

### 🔍 OSINT Recon (Lightweight)
The backend performs simple OSINT checks such as:
- Public mentions
- Subdomain patterns
- Possible credential leaks
- Basic indicator extraction

(You can expand this later with Shodan, GitHub dorks, breach APIs, etc.)

### 🧩 MITRE ATT&CK Mapping
Each OSINT finding is mapped to a relevant MITRE ATT&CK technique using a simple rule‑based engine.

Example:
- Subdomain discovery → `T1595 Active Scanning`
- Email/identity exposure → `T1589 Gather Victim Identity Information`

### 🎨 Visual Threat Board
The frontend displays a **5×5 grid** of techniques:
- Activated tiles light up when matched
- Empty tiles remain placeholders
- The board updates instantly after a scan

### 📡 API‑Driven Architecture
- FastAPI backend (`/api/scan`)
- React + TypeScript frontend
- Axios client for clean API calls
- Strong typing across the stack

---

## 🏗️ Project Structure




┌──────────────────────────────┐
│          Frontend            │
│     (React + TypeScript)     │
├───────────────┬──────────────┤
│ Components     │ Pages        │
│ (UI blocks)    │ (Screens)    │
├───────────────┴──────────────┤
│ API Client (Axios)            │
│ Types (Shared Interfaces)     │
└──────────────────────────────┘
              │
              ▼
┌──────────────────────────────┐
│           Backend             │
│       (FastAPI + Python)      │
├──────────────────────────────┤
│ main.py (App entry + CORS)    │
│ schemas.py (Typed models)     │
│ services/                     │
│   ├─ osint.py (Recon logic)   │
│   ├─ mapping.py (MITRE map)   │
│   └─ mitre.py (Technique DB)  │
└──────────────────────────────┘
              │
              ▼
┌──────────────────────────────┐
│      MITRE ATT&CK Dataset     │
│ (Local JSON or static rules)  │
└──────────────────────────────┘



