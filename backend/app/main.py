from fastapi import FastAPI
from app.schemas import ScanRequest, ScanResponse
from app.services.osint import run_osint_scan
from app.services.mapping import map_findings_to_mitre

app = FastAPI(title="ThreatBoard OSINT")

@app.post("/api/scan", response_model=ScanResponse)
async def scan_target(payload: ScanRequest):
    findings = await run_osint_scan(payload.target)
    techniques = map_findings_to_mitre(findings)
    return ScanResponse(target=payload.target, findings=findings, techniques=techniques)
