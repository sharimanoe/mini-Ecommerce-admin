import logo from "./../assets/logo-ironhack-blue.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <img src={logo} alt="footer" className="footer-logo" />
      <a href="https://github.com/sharimanoe/mini-Ecommerce-admin">GitHub</a>
    </footer>
  );
}

export default Footer;
