import Cart from "../assets/images/icon-cart.svg";
import Plus from "../assets/images/icon-plus.svg";
import Minus from "../assets/images/icon-minus.svg";

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
            <span className="discount">50%</span>
            <p className="new-price">
              New Price: <span>$249.00 (5% off)</span>
            </p>
          </div>

          <section className="purchase-info">
            <div className="add-info  w-[6rem] bg-orange-300 text-center">
              <button>
                <img src={Minus} alt="" />
              </button>
              <span>0</span>
              <button>
                <img src={Plus} alt="" />
              </button>
            </div>
            <button type="button" className="btn-add flex">
              <img src={Cart} alt="" />
              Add to Cart
            </button>
          </section>
        </div>
      </section>
    </>
  );
};
export default DetailsProduct;
