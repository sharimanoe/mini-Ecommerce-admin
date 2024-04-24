import React from "react";
import pageNotFound from "./../assets/pageNotFound.png";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <img src={pageNotFound} alt="ntf-Logo" className="ntf-img" />
      <h1>404</h1>
      <p>Oops! Page not found.</p>
    </div>
  );
}

export default NotFoundPage;
