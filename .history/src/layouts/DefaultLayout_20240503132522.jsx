/* eslint-disable react/prop-types */
import Header from "../componests/Header";
const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="h-full w-full">{children}</div>
    </>
  );
};
export default DefaultLayout;
