import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <div className="sidenav">
          <a href="#">Products</a>
          <a href="#">Add Product</a>
          <a href="#">About</a>
        </div>
        <ProductList />
      </div>

      <Footer />
      {/* 
      <Routes>
        <Route path="/" element={<StudentListPage />} />
        <Route path="/students/:studentId" element={<StudentDetailsPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes> */}
    </>
  );
}

export default App;
