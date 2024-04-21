import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const [rightSidePage, setPage] = useState("ProductListPage");

  return (
    <>
      <Navbar />
      <div className="central-page">
        <div className="sidenav">
          <Link to="/"> Products </Link>
          <br />
          <Link to="/ProductList"> Add Product </Link>
          <br />
          <Link to="*"> About </Link>
        </div>
        <div className="righ-side">
          {rightSidePage === "HomePage" && <Home />}
          {rightSidePage === "ProductListPage" && <ProductList />}
          {rightSidePage === "NotFoundPage" && <NotFoundPage />}
        </div>
      </div>

      <Footer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
