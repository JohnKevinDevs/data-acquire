import { AlertCircle, CheckCircle2, Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { leadGoals, siteContent } from "../data/siteContent.js";

const formspreeEndpoint =
  import.meta.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || import.meta.env.VITE_FORMSPREE_ENDPOINT;

const initialFormData = {
  name: "",
  email: "",
  company: "",
  whatsapp: "",
  goal: "",
  message: "",
  consent: false,
};

function validateForm(formData) {
  const nextErrors = {};

  if (!formData.name.trim()) {
    nextErrors.name = "Informe seu nome.";
  }

  if (!formData.email.trim()) {
    nextErrors.email = "Informe seu e-mail.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    nextErrors.email = "Informe um e-mail válido.";
  }

  if (!formData.company.trim()) {
    nextErrors.company = "Informe o nome da empresa.";
  }

  if (!formData.whatsapp.trim()) {
    nextErrors.whatsapp = "Informe um WhatsApp para retorno.";
  }

  if (!formData.goal) {
    nextErrors.goal = "Selecione o objetivo principal.";
  }

  if (!formData.message.trim()) {
    nextErrors.message = "Descreva brevemente o desafio atual.";
  }

  if (!formData.consent) {
    nextErrors.consent = "Confirme o consentimento para contato.";
  }

  return nextErrors;
}

function ContactSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (event) => {
    const { checked, name, type, value } = event.target;
    setFormData((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        type: "error",
        message: "Revise os campos destacados antes de enviar.",
      });
      return;
    }

    if (!formspreeEndpoint) {
      setStatus({
        type: "error",
        message:
          "Formulário ainda não configurado. Defina NEXT_PUBLIC_FORMSPREE_ENDPOINT com o endpoint do Formspree.",
      });
      return;
    }

    try {
      setStatus({ type: "loading", message: "Enviando diagnóstico..." });

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: formData.name.trim(),
          email: formData.email.trim(),
          empresa: formData.company.trim(),
          whatsapp: formData.whatsapp.trim(),
          objetivo: formData.goal,
          mensagem: formData.message.trim(),
          origem: "Landing page DataAcquire",
          consentimento:
            "Ao enviar, o lead concordou que a DataAcquire entre em contato a partir dos dados informados.",
        }),
      });

      if (!response.ok) {
        throw new Error("Falha no envio do formulário.");
      }

      setStatus({
        type: "success",
        message: "Informações enviadas com sucesso. Redirecionando...",
      });
      setFormData(initialFormData);
      window.setTimeout(() => {
        window.location.assign("/obrigado");
      }, 650);
    } catch {
      setStatus({
        type: "error",
        message:
          "Não foi possível enviar agora. Tente novamente em instantes ou fale pelo e-mail.",
      });
    }
  };

  const isLoading = status.type === "loading";

  return (
    <section className="section contact section-anchor" id="contato">
      <div className="content-shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">{siteContent.contactSection.eyebrow}</p>
          <h2>{siteContent.contactSection.title}</h2>
          <p>{siteContent.contactSection.description}</p>
          <div className="contact-links">
            <a href={`mailto:${siteContent.contact.email}`}>
              <Mail size={18} />
              {siteContent.contact.email}
            </a>
            <span>
              <MessageSquare size={18} />
              {siteContent.contactSection.secondaryInfo}
            </span>
          </div>
        </div>

        <form className="lead-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <label>
              Nome
              <input
                aria-invalid={Boolean(errors.name)}
                autoComplete="name"
                name="name"
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name ? <span className="field-error">{errors.name}</span> : null}
            </label>

            <label>
              E-mail
              <input
                aria-invalid={Boolean(errors.email)}
                autoComplete="email"
                name="email"
                type="email"
                placeholder="voce@empresa.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email ? <span className="field-error">{errors.email}</span> : null}
            </label>
          </div>

          <div className="form-grid">
            <label>
              Empresa
              <input
                aria-invalid={Boolean(errors.company)}
                autoComplete="organization"
                name="company"
                type="text"
                placeholder="Nome da empresa"
                value={formData.company}
                onChange={handleChange}
              />
              {errors.company ? <span className="field-error">{errors.company}</span> : null}
            </label>

            <label>
              WhatsApp
              <input
                aria-invalid={Boolean(errors.whatsapp)}
                autoComplete="tel"
                name="whatsapp"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.whatsapp}
                onChange={handleChange}
              />
              {errors.whatsapp ? <span className="field-error">{errors.whatsapp}</span> : null}
            </label>
          </div>

          <label>
            Objetivo principal
            <select
              aria-invalid={Boolean(errors.goal)}
              name="goal"
              value={formData.goal}
              onChange={handleChange}
            >
              <option value="">Selecione uma opção</option>
              {leadGoals.map((goal) => (
                <option key={goal} value={goal}>
                  {goal}
                </option>
              ))}
            </select>
            {errors.goal ? <span className="field-error">{errors.goal}</span> : null}
          </label>

          <label>
            Mensagem
            <textarea
              aria-invalid={Boolean(errors.message)}
              name="message"
              placeholder="Fale sobre campanhas, metas ou desafios atuais"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
            {errors.message ? <span className="field-error">{errors.message}</span> : null}
          </label>

          <label className="consent-field">
            <input
              name="consent"
              type="checkbox"
              checked={formData.consent}
              onChange={handleChange}
            />
            <span>
              Ao enviar, você concorda que a DataAcquire entre em contato a partir dos dados
              informados. Leia a futura <a href="/privacidade">política de privacidade</a>.
            </span>
          </label>
          {errors.consent ? <span className="field-error consent-error">{errors.consent}</span> : null}

          {status.message ? (
            <div className={`form-status form-status-${status.type}`} role="status">
              {status.type === "success" ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
              <span>{status.message}</span>
            </div>
          ) : null}

          <button className="button button-primary" type="submit" disabled={isLoading}>
            {isLoading ? "Enviando..." : siteContent.company.primaryOffer}
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
