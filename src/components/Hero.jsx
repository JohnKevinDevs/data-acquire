import { ArrowRight, BarChart3, Gauge, Target, TrendingUp } from "lucide-react";

function Hero() {
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
                <strong>Campanhas priorizadas por conversao</strong>
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
          <p className="eyebrow">Consultoria em dados para aquisição digital</p>
          <h1>Transforme dados em crescimento digital inteligente</h1>
          <p className="hero-subtitle">
            A DataAcquire ajuda empresas a reduzir desperdícios em campanhas, entender seu
            público e tomar decisões estratégicas com base em dados.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contato">
              Quero melhorar meus resultados
              <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#solucoes">
              Conhecer soluções
            </a>
          </div>
        </div>

        <div className="hero-proof" aria-label="Indicadores acompanhados pela DataAcquire">
          <span>
            <Target size={18} />
            Público certo
          </span>
          <span>
            <Gauge size={18} />
            Métricas claras
          </span>
          <span>
            <TrendingUp size={18} />
            Crescimento mensurável
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
