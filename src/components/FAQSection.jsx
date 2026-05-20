import { HelpCircle } from "lucide-react";
import { faqItems } from "../data/siteContent.js";

function FAQSection() {
  return (
    <section className="section faq section-anchor" id="faq">
      <div className="content-shell faq-layout">
        <div className="section-intro">
          <p className="eyebrow">FAQ</p>
          <h2>Perguntas comuns antes de solicitar um diagnóstico.</h2>
          <p>
            Respostas objetivas para entender se a DataAcquire faz sentido para o
            momento atual da sua empresa.
          </p>
        </div>

        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <HelpCircle size={18} />
                <span>{item.question}</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
