import About from "./comoponents/About";
import SimpleAccordion from "./comoponents/Accordion";
import Header from "./comoponents/Header";
import HeroSection from "./comoponents/HeroSection";
// import Login from "./comoponents/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <SimpleAccordion />
      {/* <Login /> */}
    </div>
  );
}

export default App;
