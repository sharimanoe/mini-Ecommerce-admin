import React, { useState } from "react";
import productsData from "../assets/productsData.json";
import { useParams } from "react-router-dom";
import "./UpdateProduct.css";

function UpdateProduct({ idProduct }) {
  const { productId } = useParams();
  const [product, setProduct] = useState(
    productsData.find((p) => p.id === +productId)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div className="ProductDetail-container">
      <h2>Product Detail</h2>
      <div>
        <p>ID: {product.id}</p>
        <p>
          Title:{" "}
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
        </p>
        <p>
          Description:{" "}
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </p>
        <p>
          Price:{" "}
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </p>
        <p>
          Discount Percentage:{" "}
          <input
            type="number"
            name="discountPercentage"
            value={product.discountPercentage}
            onChange={handleChange}
          />
        </p>
        <p>
          Rating:{" "}
          <input
            type="number"
            name="rating"
            value={product.rating}
            onChange={handleChange}
          />
        </p>
        <p>
          Stock:{" "}
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
          />
        </p>
        <p>
          Brand:{" "}
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
          />
        </p>
        <p>
          Category:{" "}
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </p>
        <p>
          Images:{" "}
          <input
            type="text"
            name="images"
            value={product.images}
            onChange={handleChange}
          />
        </p>
        <button
        //   onClick={() => deleteProduct(product.id)}
        //   className="btn-delete"
        >
          Save Changes
        </button>
        {/* <img
          src={product.images}
          alt="product-img-detail"
          className="product-img-detail"
        /> */}
      </div>
    </div>
  );
}

export default UpdateProduct;
