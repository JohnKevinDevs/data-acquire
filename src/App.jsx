import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProblemSection from "./components/ProblemSection.jsx";
import SolutionsSection from "./components/SolutionsSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import DifferentialsSection from "./components/DifferentialsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionsSection />
        <ServicesSection />
        <DifferentialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
