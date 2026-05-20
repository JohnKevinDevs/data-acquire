import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "../data/siteContent.js";

const logo = "/logo-dataacquire.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 980) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="DataAcquire - Início" onClick={closeMenu}>
          <img src={logo} alt="DataAcquire" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={`nav-links ${isOpen ? "is-open" : ""}`}
          id="primary-navigation"
          aria-label="Principal"
        >
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

      <button
        className={`menu-backdrop ${isOpen ? "is-visible" : ""}`}
        type="button"
        aria-label="Fechar menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
      />
    </>
  );
}

export default Header;
