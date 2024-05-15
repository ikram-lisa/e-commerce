const DetailsProduct = () => {
  return (
    <>
      <section className="product-content pr-20">
        <div className="content">
          <h2 className="product-title">SNEAKER COMPANY</h2>
          <h1>Fall Limited Edition Sneakers</h1>
          {/* <div className="product-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
          <span>4.7 (21 reviews)</span>
        </div> */}
          {/* <div className="likes"></div> */}
          <div className="product-detail">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              quisquam deleniti harum porro voluptatem voluptas, quos, labore
              nisi modi dolorum debitis dolores quaerat rem dicta!
            </p>
          </div>
          <div className="product-price">
            <p className="last-price">
              Old Price: <span>$257.00</span>
            </p>
            <span>50%</span>
            <p className="new-price">
              New Price: <span>$249.00 (5% off)</span>
            </p>
          </div>

          <div className="purchase-info">
            <spen className="add">
              <button>
                <img src="../assets/images/icon-minus.svg" alt="" />
              </button>
              <span>0</span>
              <button>
                <img src="../assets/images/icon-plus.svg" alt="" />
              </button>
            </spen>
            <button type="button" className="btn">
              Add to Cart <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default DetailsProduct;
