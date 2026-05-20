import { ArrowUpRight } from "lucide-react";
import { differentials } from "../data/siteContent.js";

function DifferentialsSection() {
  return (
    <section className="section differentials section-anchor" id="diferenciais">
      <div className="content-shell">
        <div className="section-heading">
          <p className="eyebrow">Diferenciais</p>
          <h2>Clareza técnica para quem precisa crescer com previsibilidade.</h2>
        </div>

        <div className="differential-grid">
          {differentials.map((item, index) => (
            <article className="differential-item" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
              <ArrowUpRight size={18} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DifferentialsSection;
