import HeroSection from "./HeroSection";
import Header from "./Header";
import About from "./About";
import SimpleAccordion from "./Accordion";
import Footer from "./Footer";
const Body = () => {
  return (
    <div className="body__container">
      <Header />
      <HeroSection />
      <About />
      <SimpleAccordion />
      <Footer />
    </div>
  );
};

export default Body;
