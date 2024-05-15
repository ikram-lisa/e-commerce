import Image1 from "../assets/images/image-product-1.jpg";
import Image2 from "../assets/images/image-product-2.jpg";
import Image3 from "../assets/images/image-product-3.jpg";
import Image4 from "../assets/images/image-product-4.jpg";
import ImgThumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import ImgThumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import ImgThumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import ImgThumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

const Gallery = () => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src={ImgThumbnail} alt="Shoe image 1" />
                <img src={ImgThumbnail2} alt="Shoe image 2" />
                <img src={ImgThumbnail3} alt="Shoe image 3" />
                <img src={ImgThumbnail4} alt="Shoe image 4" />
              </div>
            </div>
            <div className="img-select">
              {["1", "2", "3", "4"].map((id) => (
                <div className="img-item" key={id}>
                  <a href="#" data-id={id}>
                    <img
                      src={`https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_${id}.jpg`}
                      alt={`Shoe image ${id}`}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
