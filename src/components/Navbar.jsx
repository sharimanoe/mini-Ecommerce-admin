import logo from "./../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navBar-container">
        <div className="link-logo">
          <Link to="/">
            <button className="logo-container">
              <img src={logo} alt="Logo" className="btn-logo" />
            </button>
          </Link>
          <span className="navBar-text">Admin Tools</span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
