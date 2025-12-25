import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Purchase from "../../components/Purchase";

import car1 from "../../assets/phantomcard.webp";
import car2 from "../../assets/phantomcard2.webp";
import car3 from "../../assets/phantomcard3.webp";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />

      <section className="card-container">
        <Card
          image={car1}
          title="Vehicle"
          description="Extreme performance with futuristic design."
        />
        <Card
          image={car2}
          title="Interior"
          description="Luxury, power and advanced technology."
        />
        <Card
          image={car3}
          title="Engine"
          description="Speed and precision in every detail."
        />
      </section>
      <Purchase />
      <Footer />
    </>
  );
}
