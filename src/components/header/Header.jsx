import React from "react";
import "./Header.scss";
import coffee_logo from "../../assets/logo/coffee_logo.svg"
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";


const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container__lg">
        <nav className="navbar">
          <ul className="navbar__collection">
            <TiThMenu className="menu__item" />
            <li className="navbar__item active">
              <a href="#" className="navbar__link">
                <span className="active">Home</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                <span>About</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                <span>Menu</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                <span>Reservation</span>
              </a>
            </li>
          </ul>
          <div class="navbar__logo">
            <img src={coffee_logo} alt="logo_image" />
          </div>
          <ul className="navbar__collection">
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                <span>Page</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                <span>Shop</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                <span>Contact</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                <span>Help</span>
              </a>
            </li>
          </ul>
          <div className="navbar__icons">
            <FaHome />
            <CiSearch />
            <RiShoppingBag3Line />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
