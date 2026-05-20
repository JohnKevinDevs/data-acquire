import { AlertTriangle } from "lucide-react";
import { problemItems } from "../data/siteContent.js";

function ProblemSection() {
  return (
    <section className="section problem section-anchor" id="problema">
      <div className="content-shell two-column">
        <div className="section-intro">
          <p className="eyebrow">O problema</p>
          <h2>Marketing digital sem clareza vira custo recorrente.</h2>
          <p>
            Muitas empresas investem em campanhas todos os meses, mas continuam sem
            entender quais canais, anúncios e públicos realmente geram clientes.
          </p>
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
