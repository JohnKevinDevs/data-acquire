import { navItems, siteContent } from "../data/siteContent.js";

const logo = "/logo-dataacquire.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-shell footer-layout">
        <div className="footer-brand">
          <img src={logo} alt="DataAcquire" />
          <p>{siteContent.company.description}</p>
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
          <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
          <span>Atendimento consultivo para empresas B2B</span>
          <a href="/privacidade">Privacidade</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 DataAcquire. Todos os direitos reservados.</span> <br></br>
        <span>Desenvolvido por FluxON</span>
      </div>
    </footer>
  );
}

export default Footer;
