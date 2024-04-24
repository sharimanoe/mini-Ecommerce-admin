import { Link } from "react-router-dom";
import productsData from "../assets/productsData.json";
import { useState } from "react";
import "./ProductList.css";

function ProductList() {
  const [products, setProduct] = useState(productsData);

  const deleteProduct = (productId) => {
    const filteredProduct = products.filter((product) => {
      return product.id !== productId;
    });
    setProduct(filteredProduct);
  };

  return (
    <div className="product-list">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/ProductList/ProductDetail/${product.id}`}>
              <ul className="ul-product-list">
                <li>
                  <img
                    src={product.images}
                    alt="icon-product"
                    className="product-image"
                  />
                </li>
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
                </li>
              </ul>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
