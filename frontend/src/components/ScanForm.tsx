import { useState } from "react";
import { api } from "../api/client";
import { ScanResponse } from "../types/api";

interface Props {
  onResult: (data: ScanResponse) => void;
}

export function ScanForm({ onResult }: Props) {
  const [target, setTarget] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!target.trim()) return;
    setLoading(true);
    try {
      const res = await api.post<ScanResponse>("/scan", { target });
      onResult(res.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="scan-form">
      <input
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        placeholder="Enter domain or organization"
      />
      <button type="submit" disabled={loading}>
        {loading ? "Scanning..." : "Scan"}
      </button>
    </form>
  );
}
