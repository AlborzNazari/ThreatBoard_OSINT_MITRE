from pydantic import BaseModel
from typing import List

class Finding(BaseModel):
    source: str
    description: str
    indicator: str

class Technique(BaseModel):
    technique_id: str
    name: str
    confidence: float

class ScanRequest(BaseModel):
    target: str

class ScanResponse(BaseModel):
    target: str
    findings: List[Finding]
    techniques: List[Technique]
