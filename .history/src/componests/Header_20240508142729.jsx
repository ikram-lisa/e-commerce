import Cart from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";
import Logo from "../assets/images/logo.svg";
import Separator from "./Separator";
import MenuBurger from "../assets/images/icon-menu.svg";

const Header = () => {
  return (
    <>
      <header className="header flex justify-between w-full px-[6rem] py-3">
        <div className="menu-responsive hidden">
          <img src={MenuBurger} alt="" />
          <img src={Logo} alt="Company logo" />
          <nav>
            <ul>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Womans</a>
              </li>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="nav flex items-center gap-10">
          <img src={Logo} alt="Company logo" />
          <ul className="flex gap-4">
            <li>
              <a href="#collections">Collections</a>
            </li>
            <li>
              <a href="#men">Men</a>
            </li>
            <li>
              <a href="#womens">Womans</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <section className="cart flex justify-evenly gap-6 items-center ">
          <div className="cart-icon">
            <img src={Cart} alt="Shopping cart" />
            <span>0</span>
          </div>
          <div className="avatar">
            <img src={Avatar} alt="User avatar" />
          </div>
        </section>
      </header>
      <Separator />
    </>
  );
};

export default Header;
