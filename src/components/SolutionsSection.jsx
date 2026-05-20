import {
  AreaChart,
  BadgeCheck,
  BrainCircuit,
  Gauge,
  PieChart,
  Target,
} from "lucide-react";
import { solutions } from "../data/siteContent.js";

const solutionIcons = {
  dados: AreaChart,
  segmentacao: Target,
  campanhas: Gauge,
  bi: PieChart,
  estrategia: BrainCircuit,
};

function SolutionsSection() {
  return (
    <section className="section solutions section-anchor" id="solucoes">
      <div className="content-shell">
        <div className="section-heading">
          <p className="eyebrow">Como resolvemos</p>
          <h2>Da leitura dos dados a decisões de aquisição mais inteligentes.</h2>
          <p>
            A DataAcquire conecta análise técnica, visão de negócio e execução
            consultiva para transformar informação dispersa em plano de crescimento.
          </p>
        </div>

        <div className="solution-grid">
          {solutions.map((solution) => {
            const Icon = solutionIcons[solution.icon] ?? BadgeCheck;

            return (
              <article className="solution-card" key={solution.title}>
                <div className="icon-box">
                  <Icon size={24} />
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;
