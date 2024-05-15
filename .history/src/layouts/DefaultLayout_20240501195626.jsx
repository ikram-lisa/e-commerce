/* eslint-disable react/prop-types */
import Header from "../componests/Header";
const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="h-full w-full bg-slate-100">{children}</div>
    </>
  );
};
export default DefaultLayout;
