import { AlertTriangle } from "lucide-react";
import { problemItems, siteContent } from "../data/siteContent.js";

function ProblemSection() {
  const { problem } = siteContent;

  return (
    <section className="section problem section-anchor" id="problema">
      <div className="content-shell two-column">
        <div className="section-intro">
          <p className="eyebrow">{problem.eyebrow}</p>
          <h2>{problem.title}</h2>
          <p>{problem.description}</p>
        </div>

        <div className="problem-panel">
          {problemItems.map((item) => (
            <div className="problem-item" key={item}>
              <AlertTriangle size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
