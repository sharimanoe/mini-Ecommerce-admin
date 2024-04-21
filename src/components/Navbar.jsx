import logo from "./../assets/logo-ironhack-blue.png";

function Navbar() {
  return (
    <div>
      <nav className="navBar-container">
        <div className="div-navBar-container">
          <div className="link-logo">
            {/* <Link to="/">
            <button className="logo-container">
              <img src={logo} alt="Logo" className="btn-logo" />
            </button>
          </Link> */}
            <button className="logo-container">
              <img src={logo} alt="Logo" className="btn-logo" />
            </button>
          </div>

          <div className="navBar-title">
            <span className="navBar-text">Admin Tools</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
