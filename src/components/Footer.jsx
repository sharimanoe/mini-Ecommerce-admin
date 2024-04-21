import logo from "./../assets/logo-ironhack-blue.png";

function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <p>try footer</p>
        <p>
          <img src={logo} alt="footer" className="footer-logo" />
          <a href="https://github.com/sharimanoe/mini-Ecommerce-admin">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
