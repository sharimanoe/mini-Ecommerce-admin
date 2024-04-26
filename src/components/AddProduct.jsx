// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import productsData from "../assets/productsData.json";
import { useState } from "react";
import "./AddProduct.css";
// import "./../src/App.jsx";
import "./../App.jsx";

function AddProduct({ handleAddProduct, products }) {
  // const [products, setProducts] = useState(productsData);
  const navigate = useNavigate();
  // const history = useHistory();
  // Initialize all the variables of my form
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [rating, setRating] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState("");
  console.log(products);

  const handleId = (e) => setId(e.target.value);
  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handlePercentage = (e) => setDiscountPercentage(e.target.value);
  const handleRating = (e) => setRating(e.target.value);
  const handleStock = (e) => setStock(e.target.value);
  const handleBrand = (e) => setBrand(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleImages = (e) => setImages(e.target.value);

  const handleSubmit = (e) => {
    // Prevent form from refreshing page
    e.preventDefault();
    // Create new product object
    const newProduct = {
      id: id,
      title: title,
      description: description,
      price: price,
      discountPercentage: discountPercentage,
      rating: rating,
      stock: stock,
      brand: brand,
      category: category,
      images: images,
    };

    // Add new student to students array
    // setProducts([newProduct, ...products]);
    // console.log(newProduct);

    handleAddProduct(newProduct);

    // Reset form fields
    setId("");
    setTitle("");
    setDescription("");
    setPrice("");
    setDiscountPercentage("");
    setRating("");
    setStock("");
    setBrand("");
    setCategory("");
    // setThumbnail("");
    setImages("");

    // Redirect to the list of products
    // window.location.href = "/ProductList";
    navigate("/ProductList");
  };
  return (
    <>
      <div className="AddProduct-container">
        <p>Enter product details</p>
        <form onSubmit={handleSubmit}>
          <div className="AddProduct-labels">
            <label>
              Id:
              <input
                name="id"
                type="text"
                placeholder="Enter Id"
                value={id}
                onChange={handleId}
              />
            </label>
            <br />
            <label>
              Title:
              <input
                name="title"
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={handleTitle}
              />
            </label>
            <br />
            <label>
              Description:
              <input
                name="description"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={handleDescription}
              />
            </label>
            <br />
            <label>
              Price:
              <input
                name="price"
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={handlePrice}
              />
            </label>
            <br />
            <label>
              Percentage:
              <input
                name="discountPercentage"
                type="text"
                placeholder="Enter discount percentage"
                value={discountPercentage}
                onChange={handlePercentage}
              />
            </label>
            <br />
            <label>
              Rating:
              <input
                name="rating"
                type="text"
                placeholder="Enter rating"
                value={rating}
                onChange={handleRating}
              />
            </label>
            <br />
            <label>
              Stock:
              <input
                name="stock"
                type="text"
                placeholder="Enter stock"
                value={stock}
                onChange={handleStock}
              />
            </label>
            <br />
            <label>
              Brand:
              <input
                name="brand"
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={handleBrand}
              />
            </label>
            <br />
            <label>
              Category:
              <input
                name="category"
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={handleCategory}
              />
            </label>
            <br />
            <label>
              Images:
              <input
                name="images"
                type="url"
                placeholder="Enter images"
                value={images}
                onChange={handleImages}
              />
            </label>
          </div>
          {/* <button type="submit" onClick={handleClick}> */}
          <button type="submit">Add New Product</button>
        </form>
      </div>
    </>
  );
}
export default AddProduct;
