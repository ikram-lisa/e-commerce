import DetailsProduct from "./DetailsProduct";
import Gallery from "./Gallery";

const ProductDetails = () => {
  return (
    <>
      <section>
        <section className="card flex justify-around px-4 items-center">
          <Gallery />
          <DetailsProduct />
        </section>
      </section>
    </>
  );
};
export default ProductDetails;
