/* eslint-disable no-unused-vars */
import Cart from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";
import Logo from "../assets/images/logo.svg";
import Separator from "./Separator";
import MenuBurger from "../assets/images/icon-menu.svg";
import Close from "../assets/images/icon-close.svg";
import { useState } from "react";
const Header = () => {
  const [close, setClose] = useState(false);
  // const [menu, setMenu] = useState(false);
  const closeModal = () => {
    setClose(false);
  };
  return (
    <>
      <div className="menu-responsive w-[45%] h-[100vh] bg-red-900 absolute z-[999999]">
        <img src={MenuBurger} alt="" />
        <img src={Logo} alt="Company logo" />
        <nav className="nav-responsive ">
          <button
            className="close-button"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <img src={Close} alt="Close" />
          </button>
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
      <header className="header flex justify-between w-full px-[6rem] py-3">
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
          <div className="cart-icon ">
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
