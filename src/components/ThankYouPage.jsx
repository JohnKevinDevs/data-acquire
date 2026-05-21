import { ArrowLeft, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, siteContent } from "../data/siteContent.js";

function ThankYouPage() {
  const whatsappUrl = getWhatsAppUrl(
    "Olá, vim pelo site da DataAcquire e gostaria de falar sobre aquisição digital.",
  );

  return (
    <main className="thank-you-page">
      <section className="section">
        <div className="content-shell thank-you-card">
          <p className="eyebrow">Formulário recebido</p>
          <h1>Obrigado pelo contato.</h1>
          <p>
            A DataAcquire recebeu suas informações e em breve entrará em contato para
            entender melhor seus objetivos digitais.
          </p>
          <div className="thank-you-actions">
            <a className="button button-secondary-light" href="/">
              <ArrowLeft size={18} />
              Voltar para a home
            </a>
            {whatsappUrl ? (
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Falar pelo WhatsApp
              </a>
            ) : (
              <a className="button button-primary" href={`mailto:${siteContent.contact.email}`}>
                Falar com a DataAcquire
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ThankYouPage;
