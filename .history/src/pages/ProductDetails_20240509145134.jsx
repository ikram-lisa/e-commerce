import DetailsProduct from "./DetailsProduct";
import Gallery from "./Gallery";

const ProductDetails = () => {
  return (
    <>
      <section>
        <section className="card flex gap-28 px-4 items-center ">
          <Gallery />
          <DetailsProduct />
        </section>
      </section>
    </>
  );
};
export default ProductDetails;
