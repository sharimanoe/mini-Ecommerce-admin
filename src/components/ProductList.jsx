import { Link, useNavigate } from "react-router-dom";
// import productsData from "../assets/productsData.json";
import { useState } from "react";
import "./ProductList.css";

function ProductList({ products, setProduct }) {
  // const [products, setProduct] = useState(productsData);
  const navigate = useNavigate();
  const deleteProduct = (productId) => {
    const filteredProduct = products.filter((product) => {
      return product.id !== productId;
    });
    setProduct(filteredProduct);
  };

  const updateProduct = (productId) => {
    console.log(`press bottom update product`);
    console.log(productId);
    navigate(`/ProductList/UpdateProduct/${productId}`);
  };

  return (
    <div className="product-list">
      <ul className="ul-header">
        <li>Image</li>
        <li>Title</li>
        <li>Prices</li>
        <li>Stock</li>
        <li>Options </li>
      </ul>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <ul className="ul-product-list">
              <Link to={`/ProductList/ProductDetail/${product.id}`}>
                <li>
                  <img
                    src={product.images}
                    alt="icon-product"
                    className="product-image"
                  />
                </li>
              </Link>
              <li>{product.title}</li>
              <li>{product.price}</li>
              <li>{product.stock}</li>

              <li>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="btn-delete"
                >
                  Delete
                </button>
                <button
                  onClick={() => updateProduct(product.id)}
                  className="btn-update"
                >
                  Update
                </button>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
