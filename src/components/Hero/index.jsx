import "./hero.scss";
import heroVideo from "../../assets/herovideo.mp4"; 

function Hero() {
  return (
    <section className="hero" id="home">
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="overlay" />

      <div className="hero-content">
        <h2>Experience Unmatched Luxury</h2>
        <p>Discover the epitome of automotive excellence.</p>
        <button className="hero-btn">Discover More</button>
      </div>
    </section>
  );
}

export default Hero;
