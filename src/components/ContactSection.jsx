import { ArrowRight, Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

const contactEmail = "contato@dataacquire.com.br";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent("Contato pelo site DataAcquire");
    const body = encodeURIComponent(
      [
        `Nome: ${formData.name}`,
        `E-mail: ${formData.email}`,
        `Empresa: ${formData.company}`,
        "",
        "Mensagem:",
        formData.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section contact section-anchor" id="contato">
      <div className="content-shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Contato</p>
          <h2>Pronto para entender melhor seus dados e crescer com mais inteligência?</h2>
          <p>
            Conte onde sua empresa quer chegar. A DataAcquire ajuda a transformar
            campanhas, públicos e indicadores em um plano de crescimento claro.
          </p>
          <div className="contact-links">
            <a href={`mailto:${contactEmail}`}>
              <Mail size={18} />
              {contactEmail}
            </a>
            <span>
              <MessageSquare size={18} />
              Diagnóstico inicial consultivo
            </span>
          </div>
        </div>

        <form className="lead-form" onSubmit={handleSubmit}>
          <label>
            Nome
            <input
              name="name"
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            E-mail
            <input
              name="email"
              type="email"
              placeholder="voce@empresa.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Empresa
            <input
              name="company"
              type="text"
              placeholder="Nome da empresa"
              value={formData.company}
              onChange={handleChange}
            />
          </label>
          <label>
            Como podemos ajudar?
            <textarea
              name="message"
              placeholder="Fale sobre campanhas, metas ou desafios atuais"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </label>
          <button className="button button-primary" type="submit">
            Entrar em contato
            <Send size={18} />
          </button>
          <a className="form-secondary-link" href="#solucoes">
            Revisar soluções
            <ArrowRight size={16} />
          </a>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
