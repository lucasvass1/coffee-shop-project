import Header from "./components/sections/Header/Header.jsx";
import Hero from "./components/sections/Hero/Hero.jsx";
import About from "./components/sections/About/About.jsx";
import FeaturedDrinks from "./components/sections/FeaturedDrinks/FeaturedDrinks.jsx";
import WhyUs from "./components/sections/WhyUs/WhyUs.jsx";
import MenuSection from "./components/sections/MenuSection/MenuSection.jsx";
import CoffeeCta from "./components/sections/CoffeeCta/CoffeeCta.jsx";
import Testimonials from "./components/sections/Testimonials/Testimonials.jsx";
import Newsletter from "./components/sections/Newsletter/Newsletter.jsx";
import Footer from "./components/sections/Footer/Footer.jsx";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <FeaturedDrinks />
        <WhyUs />
        <MenuSection />
        <CoffeeCta />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
