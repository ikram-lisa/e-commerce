/* eslint-disable no-unused-vars */
import Cart from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";
import Logo from "../assets/images/logo.svg";
import Separator from "./Separator";
import MenuBurger from "../assets/images/icon-menu.svg";
import Close from "../assets/images/icon-close.svg";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 xs:blocks:hidden ">
          <div>
            <button>
              <img src={MenuBurger} alt="Close menu" />
            </button>
            <img src={Logo} alt="" />
          </div>
          <div className="fixed top-0 left-0 w-3/4 max-w-sm h-full bg-white p-6 z-50">
            <button onClick={toggleMenu} aria-label="Close menu">
              <img src={Close} alt="Close menu" />
            </button>
            <nav>
              <ul className="space-y-4 text-lg font-bold">
                <li>
                  <a href="#men" onClick={toggleMenu}>
                    Men
                  </a>
                </li>
                <li>
                  <a href="#women" onClick={toggleMenu}>
                    Women
                  </a>
                </li>
                <li>
                  <a href="#collections" onClick={toggleMenu}>
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={toggleMenu}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={toggleMenu}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
      <header className="header  justify-between w-full px-[6rem] py-3 xs:hidden ">
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
