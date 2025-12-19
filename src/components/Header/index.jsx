import { useState } from "react";
import "./header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="logo">PHANTOM</h1>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#vehicle">Vehicle</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="btn-primary">Explore</button>
      </nav>

     
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

export default Header;
