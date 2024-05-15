const DetailsProduct = () => {
  return (
    <>
      <div className="product-content">
        <h2 className="product-title">Nike Shoes</h2>
        <a href="#" className="product-link">
          Visit Nike Store
        </a>
        <div className="product-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
          <span>4.7 (21 reviews)</span>
        </div>

        <div className="product-price">
          <p className="last-price">
            Old Price: <span>$257.00</span>
          </p>
          <p className="new-price">
            New Price: <span>$249.00 (5% off)</span>
          </p>
        </div>

        <div className="product-detail">
          <h2>About this item:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            eveniet veniam tempora fuga tenetur placeat sapiente architecto
            illum soluta consequuntur, aspernatur quidem at sequi ipsa!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.
          </p>
          <ul>
            <li>
              Color: <span>Black</span>
            </li>
            <li>
              Available: <span>in stock</span>
            </li>
            <li>
              Category: <span>Shoes</span>
            </li>
            <li>
              Shipping Area: <span>All over the world</span>
            </li>
            <li>
              Shipping Fee: <span>Free</span>
            </li>
          </ul>
        </div>

        <div className="purchase-info">
          <input type="number" min="0" defaultValue="1" />
          <button type="button" className="btn">
            Add to Cart <i className="fas fa-shopping-cart"></i>
          </button>
          <button type="button" className="btn">
            Compare
          </button>
        </div>

        <div className="social-links">
          <p>Share at:</p>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </>
  );
};
export default DetailsProduct;
