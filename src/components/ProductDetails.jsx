import React from "react";
import productsData from "../assets/productsData.json";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails({ idProduct }) {
  const { productId } = useParams();
  const product = productsData.find((p) => p.id === +productId);

  return (
    <div className="ProductDetail-container">
      <h2>Product Detail</h2>
      <div>
        <p>ID: {product.id}</p>
        <p>Title: {product.title}</p>
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
        <p>Discount Percentage: {product.discountPercentage}</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <p>Images:</p>
        <img
          src={product.images}
          alt="product-img-detail"
          className="product-img-detail"
        />
      </div>
    </div>
  );
}

export default ProductDetails;
