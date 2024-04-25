import React, { useState } from "react";
// import productsData from "../assets/productsData.json";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./UpdateProduct.css";
import { Link } from "react-router-dom";
import "./../App.jsx";

function UpdateProduct({ products, handleUpdateProduct }) {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState(
    // productsData.find((p) => p.id === +productId)
    products.find((p) => p.id === +productId)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const saveProduct = () => {
    console.log(`product: ` + product.title);
    console.log(`complete product: ` + product);
    //saving changes in the father
    handleUpdateProduct(product, product.id);
    navigate(`/ProductList`);
  };

  return (
    <div className="ProductDetail-container">
      <h2>Inser the modificacion and press save</h2>
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
      </div>
      <button onClick={() => saveProduct()} className="btn-delete">
        Save Changes
      </button>
    </div>
  );
}

export default UpdateProduct;
