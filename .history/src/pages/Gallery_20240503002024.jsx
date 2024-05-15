import React, { useState } from "react";
import Image1 from "../assets/images/image-product-1.jpg";
import Image2 from "../assets/images/image-product-2.jpg";
import Image3 from "../assets/images/image-product-3.jpg";
import Image4 from "../assets/images/image-product-4.jpg";
import ImgThumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import ImgThumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import ImgThumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import ImgThumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

const Gallery = () => {
  // State to hold the currently displayed large image
  const [activeImg, setActiveImg] = useState(Image1);

  // Function to change the large image
  const handleThumbnailClick = (image) => {
    setActiveImg(image);
  };

  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src={activeImg} alt="Displayed Shoe" />
              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <a href="#" onClick={() => handleThumbnailClick(Image1)}>
                  <img src={ImgThumbnail} alt="Shoe image 1" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" onClick={() => handleThumbnailClick(Image2)}>
                  <img src={ImgThumbnail2} alt="Shoe image 2" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" onClick={() => handleThumbnailClick(Image3)}>
                  <img src={ImgThumbnail3} alt="Shoe image 3" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" onClick={() => handleThumbnailClick(Image4)}>
                  <img src={ImgThumbnail4} alt="Shoe image 4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
