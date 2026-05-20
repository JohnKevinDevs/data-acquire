import { CheckCircle2 } from "lucide-react";
import { services } from "../data/siteContent.js";

function ServicesSection() {
  return (
    <section className="section services section-anchor" id="servicos">
      <div className="content-shell service-layout">
        <div className="section-intro">
          <p className="eyebrow">Servicos</p>
          <h2>Consultoria para diagnosticar, medir e otimizar a aquisição digital.</h2>
          <p>
            Atuamos nos pontos que mais impactam performance: campanhas, segmentação,
            dashboards, indicadores e tomada de decisão.
          </p>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <div className="service-item" key={service}>
              <CheckCircle2 size={20} />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
