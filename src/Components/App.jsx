import React, { useState, useEffect } from "react";
import "./ImageGallery.css";
import WhatsAppButton from "./WhatsAppButton";
import Navbar from "./Navbar";
import Footer from "./Footer";
import images from "./images.json";

const ImageGallery = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    setImageData(images);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="image-gallery">
        {imageData.map((image) => (
          <div className="image-card" key={image.id}>
            <img src={image.url} alt={image.description} />
            <div className="image-card-body">
              <h3>{image.description}</h3>
              <WhatsAppButton />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ImageGallery;
