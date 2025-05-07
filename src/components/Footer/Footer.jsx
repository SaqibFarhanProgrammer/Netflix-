import React from "react";
import "./Footer.css";

const footerLinks = [
  "FAQ",
  "Help Center",
  "Account",
  "Media Center",
  "Investor Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
  "Contact Us",
  "Speed Test",
  "Legal Notices",
  "Only on Netflix"
];

export default function Footer() {
  return (
    <footer className="netflix-footer">
      <div className="footer-overlay">
       
      </div>

      <div className="footer-container">
        <div className="footer-links-grid">
          {footerLinks.map((link, i) => (
            <a href="#" key={i} className="footer-link">
              {link}
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <button className="footer-lang-btn">🌐 English</button>
          <p className="footer-copy">© 2025 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
