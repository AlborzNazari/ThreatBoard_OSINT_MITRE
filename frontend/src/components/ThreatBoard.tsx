import { Technique } from "../types/api";

interface Props {
  techniques: Technique[];
}

const GRID_SIZE = 5;

export function ThreatBoard({ techniques }: Props) {
  const filled = new Set(techniques.map((t) => t.technique_id));

  const cells = Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
    const technique = techniques[i];
    const active = technique && filled.has(technique.technique_id);
    return (
      <div
        key={i}
        className={`cell ${active ? "cell-active" : "cell-empty"}`}
      >
        {technique ? (
          <>
            <div className="tech-id">{technique.technique_id}</div>
            <div className="tech-name">{technique.name}</div>
          </>
        ) : (
          <span className="placeholder">?</span>
        )}
      </div>
    );
  });

  return <div className="threat-board">{cells}</div>;
}
