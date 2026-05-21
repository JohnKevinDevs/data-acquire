import { ArrowLeft, Mail } from "lucide-react";
import { siteContent } from "../data/siteContent.js";

const privacySections = [
  {
    title: "Introdução",
    content:
      "Esta Política de Privacidade explica como a DataAcquire coleta, utiliza e protege dados pessoais enviados por pessoas interessadas em seus serviços. O objetivo é oferecer transparência sobre o tratamento de informações no site e no formulário de contato.",
  },
  {
    title: "Quais dados coletamos",
    content:
      "Podemos coletar nome, e-mail, empresa, WhatsApp, objetivo principal, mensagem enviada no formulário e confirmação de consentimento. Não solicitamos dados sensíveis no formulário de contato.",
  },
  {
    title: "Como coletamos os dados",
    content:
      "Os dados são coletados quando você preenche e envia voluntariamente o formulário disponível no site da DataAcquire. Também podemos receber informações quando você entra em contato por e-mail, WhatsApp ou outros canais oficiais informados no site.",
  },
  {
    title: "Para que usamos os dados",
    content:
      "Usamos os dados para responder solicitações de contato, entender necessidades comerciais, realizar um diagnóstico inicial, enviar comunicações relacionadas ao atendimento solicitado e melhorar a experiência no site.",
  },
  {
    title: "Compartilhamento de dados",
    content:
      "A DataAcquire não vende dados pessoais. As informações podem ser processadas por ferramentas necessárias para receber e organizar contatos, como serviços de formulário, hospedagem ou e-mail. Esses fornecedores devem tratar os dados apenas para viabilizar a operação do site e do atendimento.",
  },
  {
    title: "Armazenamento e segurança",
    content:
      "Mantemos os dados pelo tempo necessário para responder ao contato, acompanhar oportunidades comerciais e cumprir obrigações aplicáveis. Adotamos medidas razoáveis de segurança para reduzir riscos de acesso indevido, perda, alteração ou divulgação não autorizada.",
  },
  {
    title: "Direitos do titular dos dados",
    content:
      "Você pode solicitar confirmação de tratamento, acesso, correção, atualização, exclusão ou revisão do uso dos seus dados pessoais, conforme a Lei Geral de Proteção de Dados (LGPD). Para exercer seus direitos, entre em contato pelo e-mail informado nesta página.",
  },
  {
    title: "Cookies e ferramentas de análise",
    content:
      "Atualmente, o site pode usar recursos técnicos necessários para funcionamento básico. Caso ferramentas de análise, pixels de mídia ou tecnologias semelhantes sejam adicionadas no futuro, esta política deverá ser atualizada para explicar quais ferramentas são usadas e com qual finalidade.",
  },
  {
    title: "Contato",
    content:
      "Para dúvidas sobre esta política, solicitações relacionadas a dados pessoais ou remoção de informações, entre em contato com a DataAcquire pelo e-mail oficial informado abaixo.",
  },
  {
    title: "Atualizações desta política",
    content:
      "Esta política pode ser atualizada para refletir mudanças no site, nos serviços ou em requisitos legais. A versão mais recente estará sempre disponível nesta página.",
  },
];

function PrivacyPage() {
  return (
    <main className="privacy-page">
      <section className="section">
        <article className="content-shell privacy-card privacy-policy-card">
          <p className="eyebrow">Privacidade e LGPD</p>
          <h1>Política de Privacidade da DataAcquire</h1>
          <p className="privacy-updated">Última atualização: 21 de maio de 2026.</p>
          <p>
            Este documento tem caráter informativo e não substitui uma consultoria jurídica
            definitiva. Ele descreve, de forma clara, como a DataAcquire trata os dados
            enviados por visitantes e potenciais clientes.
          </p>

          <div className="privacy-sections">
            {privacySections.map((section) => (
              <section className="privacy-section" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </section>
            ))}
          </div>

          <div className="privacy-contact-box">
            <Mail size={18} />
            <div>
              <strong>E-mail para contato</strong>
              <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
            </div>
          </div>

          <a className="button button-primary privacy-back-button" href="/">
            <ArrowLeft size={18} />
            Voltar para a página inicial
          </a>
        </article>
      </section>
    </main>
  );
}

export default PrivacyPage;
