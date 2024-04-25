import { Link } from "react-router-dom";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidenav">
      <Link to="/"> Home </Link>
      <br />
      <Link to="/ProductList"> List of Products </Link>
      <br />
      <Link to="/ProductList/AddProduct"> Add Product </Link>
      <br />
      {/* <Link to="/ProductList/UpdateProduct/1"> Update product </Link>
      <br /> */}
      <Link to="*"> About </Link>
    </div>
  );
}

export default SideBar;
