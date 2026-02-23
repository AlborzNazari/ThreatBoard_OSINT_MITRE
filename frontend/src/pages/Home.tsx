import { useState } from "react";
import { ScanForm } from "../components/ScanForm";
import { ThreatBoard } from "../components/ThreatBoard";
import { ScanResponse } from "../types/api";

export function Home() {
  const [data, setData] = useState<ScanResponse | null>(null);

  return (
    <div className="page">
      <h1>ThreatBoard OSINT</h1>
      <p>Visualize OSINT findings mapped to MITRE ATT&CK techniques.</p>
      <ScanForm onResult={setData} />
      {data && (
        <>
          <h2>Target: {data.target}</h2>
          <ThreatBoard techniques={data.techniques} />
        </>
      )}
    </div>
  );
}
