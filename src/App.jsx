import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProblemSection from "./components/ProblemSection.jsx";
import SolutionsSection from "./components/SolutionsSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import HowItWorksSection from "./components/HowItWorksSection.jsx";
import DifferentialsSection from "./components/DifferentialsSection.jsx";
import FAQSection from "./components/FAQSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import ThankYouPage from "./components/ThankYouPage.jsx";
import PrivacyPage from "./components/PrivacyPage.jsx";
import "./styles.css";

function App() {
  const path = window.location.pathname;

  if (path === "/obrigado") {
    return (
      <>
        <Header />
        <ThankYouPage />
        <Footer />
      </>
    );
  }

  if (path === "/privacidade") {
    return (
      <>
        <Header />
        <PrivacyPage />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionsSection />
        <HowItWorksSection />
        <ServicesSection />
        <DifferentialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
