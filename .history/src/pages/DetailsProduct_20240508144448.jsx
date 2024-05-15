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
            <div className="add-info ">
              <form className="max-w-xs mx-auto">
                <div className="relative flex items-center max-w-[8rem]">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="quantity-input"
                    className="bg-blueGrayLight  hover:bg-gray-200 border  rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <img src={Minus} alt="" />
                  </button>
                  <input
                    type="text"
                    id="quantity-input"
                    data-input-counter
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm  w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
                    placeholder="0"
                    required
                  />
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="quantity-input"
                    className="bg-gray-100    hover:bg-gray-200 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <img src={Plus} alt="" />
                  </button>
                </div>
                <p
                  id="helper-text-explanation"
                  className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  Please select a 5 digit number from 0 to 9.
                </p>
              </form>
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
