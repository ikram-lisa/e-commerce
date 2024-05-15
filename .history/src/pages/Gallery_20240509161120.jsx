import { useState } from "react";
import Image1 from "../assets/images/image-product-1.jpg";
import Image2 from "../assets/images/image-product-2.jpg";
import Image3 from "../assets/images/image-product-3.jpg";
import Image4 from "../assets/images/image-product-4.jpg";
import ImgThumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import ImgThumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import ImgThumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import ImgThumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
import Close from "../assets/images/icon-close.svg";
import Prev from "../assets/images/icon-previous.svg";
import Next from "../assets/images/icon-next.svg";
const Gallery = () => {
  const [activeImg, setActiveImg] = useState(Image1);
  const [showModal, setShowModal] = useState(false);

  const handleThumbnailClick = (image) => {
    setActiveImg(image);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const images = [Image1, Image2, Image3, Image4]; // Array of images

  const handleNext = () => {
    const currentIndex = images.indexOf(activeImg);
    const nextIndex = (currentIndex + 1) % images.length;
    setActiveImg(images[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = images.indexOf(activeImg);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setActiveImg(images[prevIndex]);
  };

  return (
    <>
      <div className="card-wrapper my-24">
        <div className="product-imgs">
          <div className="img-display">
            <img src={activeImg} alt="Displayed Shoe" />
          </div>
          <div className="img-select">
            {[Image1, Image2, Image3, Image4].map((img, index) => (
              <div className="img-item" key={index}>
                <a href="#" onClick={() => handleThumbnailClick(img)}>
                  <img
                    src={
                      [
                        ImgThumbnail,
                        ImgThumbnail2,
                        ImgThumbnail3,
                        ImgThumbnail4,
                      ][index]
                    }
                    alt={`Shoe image ${index + 1}`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="close-button" onClick={closeModal}>
              <img src={Close} alt="Close" />
            </div>
            <div className="modal-img">
              <img src={activeImg} alt="Enlarged Shoe" />
            </div>
            <div className="modal-nav">
              <button className="prev" onClick={() => handleNext(true)}>
                <img src={Prev} alt="Previous" />
              </button>
              <button className="next" onClick={() => handleNext(false)}>
                <img src={Next} alt="Next" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
