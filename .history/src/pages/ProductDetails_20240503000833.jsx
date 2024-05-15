import DetailsProduct from "./DetailsProduct";
import Gallery from "./Gallery";

const ProductDetails = () => {
  return (
    <>
      <section>
        <section className="card">
          <Gallery />
          <DetailsProduct />
        </section>
      </section>
    </>
  );
};
export default ProductDetails;
