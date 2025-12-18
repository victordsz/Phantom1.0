import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";

import car1 from "./assets/phantomcard.webp";
import car2 from "./assets/phantomcard2.webp";
import car3 from "./assets/phantomcard3.webp";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <section className="cards">
        <Card
          image={car1}
          title="Phantom X"
          description="Performance extrema com design futurista."
        />

        <Card
          image={car2}
          title="Phantom GT"
          description="Luxo, potência e tecnologia avançada."
        />

        <Card
          image={car3}
          title="Phantom RS"
          description="Velocidade e precisão em cada detalhe."
        />
      </section>
    </>
  );
}

export default App;
