import DefaultLayout from "./layouts/DefaultLayout.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
const App = () => {
  return (
    <>
      <DefaultLayout>
        <ProductDetails />
      </DefaultLayout>
    </>
  );
};
export default App;
