from typing import List
from app.schemas import Finding, Technique

def map_findings_to_mitre(findings: List[Finding]) -> List[Technique]:
    # TODO: real mapping logic
    techniques: List[Technique] = []

    for f in findings:
        if "subdomain" in f.indicator:
            techniques.append(
                Technique(
                    technique_id="T1595",
                    name="Active Scanning",
                    confidence=0.8,
                )
            )
        if "email:" in f.indicator:
            techniques.append(
                Technique(
                    technique_id="T1589",
                    name="Gather Victim Identity Information",
                    confidence=0.7,
                )
            )

    # Deduplicate by technique_id
    unique = {}
    for t in techniques:
        unique[t.technique_id] = t
    return list(unique.values())
