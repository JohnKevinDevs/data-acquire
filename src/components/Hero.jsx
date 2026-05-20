import { ArrowRight, BarChart3, Gauge, Target, TrendingUp } from "lucide-react";
import { siteContent } from "../data/siteContent.js";

function Hero() {
  const { hero } = siteContent;

  return (
    <section className="hero section-anchor" id="inicio">
      <div className="hero-visual" aria-hidden="true">
        <div className="metric-strip">
          <span>ROI</span>
          <strong>+38%</strong>
        </div>
        <div className="metric-strip metric-strip-secondary">
          <span>CAC</span>
          <strong>-24%</strong>
        </div>
        <div className="analytics-board">
          <div className="board-header">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="board-grid">
            <div className="board-card wide">
              <BarChart3 size={24} />
              <div>
                <span>Performance</span>
                <strong>Campanhas priorizadas por conversão</strong>
              </div>
            </div>
            <div className="chart-bars">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="signal-list">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-content content-shell">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contato">
              {hero.primaryCta}
              <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#solucoes">
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hero-proof" aria-label="Indicadores acompanhados pela DataAcquire">
          <span>
            <Target size={18} />
            {hero.proofPoints[0]}
          </span>
          <span>
            <Gauge size={18} />
            {hero.proofPoints[1]}
          </span>
          <span>
            <TrendingUp size={18} />
            {hero.proofPoints[2]}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
