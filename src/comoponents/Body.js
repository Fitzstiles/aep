import HeroSection from "./HeroSection";
import Header from "./Header";
import About from "./About";
import SimpleAccordion from "./Accordion";
import Footer from "./Footer";
import Work from "./Work";
const Body = () => {
  return (
    <div className="body__container">
      <Header />
      <HeroSection />
      <About />
      <SimpleAccordion />
      <Work />
      <Footer />
    </div>
  );
};

export default Body;
