from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="ThreatBoard OSINT")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Import your routes or define them here
from app.schemas import ScanRequest, ScanResponse
from app.services.osint import run_osint_scan
from app.services.mapping import map_findings_to_mitre

@app.post("/api/scan", response_model=ScanResponse)
async def scan_target(payload: ScanRequest):
    findings = await run_osint_scan(payload.target)
    techniques = map_findings_to_mitre(findings)
    return ScanResponse(
        target=payload.target,
        findings=findings,
        techniques=techniques
    )
