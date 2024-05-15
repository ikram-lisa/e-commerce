import Cart from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";
import Logo from "../assets/images/logo.svg";
import Separator from "./Separator";
const Header = () => {
  return (
    <>
      <header className="header flex justify-between w-full px-4 py-3 bg-stone-100">
        <nav className="nav flex items-center gap-4">
          <img src={Logo} alt="logo" />
          <ul className="flex gap-4">
            <li>Collections</li>
            <li>Men</li>
            <li>Womans</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <section className="cart flex justify-evenly gap-6 items-center ">
          <div className="cart-icon">
            <img src={Cart} alt="cart" />
            <span></span>
          </div>
          <div className="avatar">
            <img src={Avatar} alt="avatar" />
          </div>
        </section>
      </header>
      <Separator />
    </>
  );
};
export default Header;
