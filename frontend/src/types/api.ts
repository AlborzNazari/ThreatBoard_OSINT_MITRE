export interface Finding {
  source: string;
  description: string;
  indicator: string;
}

export interface Technique {
  technique_id: string;
  name: string;
  confidence: number;
}

export interface ScanRequest {
  target: string;
}

export interface ScanResponse {
  target: string;
  findings: Finding[];
  techniques: Technique[];
}
