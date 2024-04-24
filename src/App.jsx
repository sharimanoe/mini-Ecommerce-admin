import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./components/ProductDetails";
import productsData from "./assets/productsData.json";

function App() {
  // const [mainPage, setPage] = useState("Home");
  const [products, setProduct] = useState(productsData);

  return (
    <>
      {/* Construction of my page */}

      <Navbar />

      <div className="middle-page">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductList" element={<ProductList />} />
          {/* path="/products" */}
          <Route path="/ProductList/AddProduct" element={<AddProduct />} />
          {/* path="/products/create" */}

          <Route
            path="/ProductList/ProductDetail/:productId"
            element={<ProductDetails />}
          />
          {/* path="/products/:productId/details" */}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* {products &&
          products.map((product) => {
            return <ProductDetails key={product.id} {...products} />;
          })} */}
      </div>

      <Footer />
    </>
  );
}

export default App;
