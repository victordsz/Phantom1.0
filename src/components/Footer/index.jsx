import "./footer.scss";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

       
        <div className="footer-brand">
          <h3>PHANTOM</h3>
          <p>
            Crafting digital experiences with precision, elegance and performance.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <Icon icon="mdi:instagram" />
            </a>
            <a href="#" aria-label="GitHub">
              <Icon icon="mdi:github" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Icon icon="mdi:linkedin" />
            </a>
          </div>
        </div>

      
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

      
        <div className="footer-copy">
          <span>© {new Date().getFullYear()} PHANTOM</span>
          <span>All rights reserved</span>
        </div>

      </div>
    </footer>
  );
}
