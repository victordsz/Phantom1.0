import "./about.scss";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        <div className="about-text">
          <span className="about-eyebrow">Sobre</span>
          <h2>The PHANTOM Experience</h2>

          <p>
            For over a century, PHANTOM has stood as the pinnacle of automotive luxury. 
            Our vehicles are not merely modes of transportation; they are masterpieces of engineering and design, 
            crafted for those who demand nothing but excellence. Each PHANTOM vehicle is meticulously handcrafted by our master artisans, 
            ensuring unparalleled quality and an experience that transcends ordinary luxu
          </p>

          <p>
            Each project is designed to offer solid, performative, and visually striking experiences.
          </p>

          <a href="#projects" className="about-cta">
            Projects
          </a>
        </div>

        <div className="about-visual">
          <div className="about-frame">
            <img src="public/about-image.webp" alt="About Image" />
          </div>
        </div>

      </div>
    </section>
  );
}
