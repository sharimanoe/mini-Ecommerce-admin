import productsData from "../assets/productsData.json";
import { useState } from "react";

function ProductList() {
  const [products, setProduct] = useState(productsData);

  const deleteProduct = (productId) => {
    const filteredProduct = products.filter((product) => {
      return product.id !== productId;
    });
    setProduct(filteredProduct);
  };

  return (
    <div>
      <p>test product </p>
      {products.map((product) => {
        return (
          <div key={product.id} className="product-list">
            <ul>
              <li>
                {" "}
                <img
                  src={product.thumbnail}
                  alt="icon-product"
                  className="product-image"
                />
              </li>
              <li>{product.title}</li>
              <li>{product.price}</li>
              <li>{product.stock}</li>
              <li>
                {" "}
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="btn-delete"
                >
                  Delete
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
