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
  const [rightSidePage, setPage] = useState("HomePage");

  return (
    <>
      <Navbar />
      <div>
        <div className="sidenav">
          <Link to="/"> Products </Link>
          <Link to="/ProductList"> Add Product </Link>
          <Link to="*"> About </Link>
        </div>
        {rightSidePage === "HomePage" && <Home />}
        {rightSidePage === "ProductListPage" && <ProductList />}
        {rightSidePage === "NotFoundPage" && <NotFoundPage />}
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
