

import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./index.css";

import car1 from "./assets/phantomcard.webp";
import car2 from "./assets/phantomcard2.webp";
import car3 from "./assets/phantomcard3.webp";



function App() {
  return (
    <>
      <Header />
      <Hero />
      <section className="card-container">
  <Card
    image={car1}
    title="Vehicle"
    description="Extreme performance with futuristic design.."
  />

  <Card
    image={car2}
    title="Phantom GT"
    description="Luxury, power and advanced technology."
  />

  <Card
    image={car3}
    title="Phantom RS"
    description="Speed ​​and precision in every detail.."
  />
</section>

    </>
  );
}

export default App;
