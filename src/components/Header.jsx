import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../data/siteContent.js";

const logo = "/logo-dataacquire.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="DataAcquire - Início">
        <img src={logo} alt="DataAcquire" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={`nav-links ${isOpen ? "is-open" : ""}`} aria-label="Principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="header-cta" href="#contato" onClick={closeMenu}>
          Fale com a DataAcquire
        </a>
      </nav>
    </header>
  );
}

export default Header;
