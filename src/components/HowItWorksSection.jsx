import { ClipboardCheck, LineChart, ListChecks } from "lucide-react";
import { howItWorks } from "../data/siteContent.js";

const icons = [ClipboardCheck, LineChart, ListChecks];

function HowItWorksSection() {
  return (
    <section className="section how-it-works section-anchor" id="como-funciona">
      <div className="content-shell">
        <div className="section-heading">
          <p className="eyebrow">Como funciona</p>
          <h2>Um processo claro para transformar dados em próximas ações.</h2>
          <p>
            O diagnóstico organiza informações dispersas e mostra o que precisa ser
            priorizado para melhorar a aquisição digital.
          </p>
        </div>

        <div className="process-grid">
          {howItWorks.map((step, index) => {
            const Icon = icons[index] ?? ListChecks;

            return (
              <article className="process-card" key={step.title}>
                <div className="process-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="icon-box">
                  <Icon size={24} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
