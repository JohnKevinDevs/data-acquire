import { navItems } from "../data/siteContent.js";

const logo = "/logo-dataacquire.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-shell footer-layout">
        <div className="footer-brand">
          <img src={logo} alt="DataAcquire" />
          <p>
            Consultoria em dados, BI e aquisição digital para empresas que querem
            crescer com mais clareza.
          </p>
        </div>

        <div className="footer-links">
          <strong>Links rápidos</strong>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer-contact">
          <strong>Contato</strong>
          <a href="mailto:contato@dataacquire.com.br">contato@dataacquire.com.br</a>
          <span>Atendimento consultivo para empresas B2B</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 DataAcquire. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;
