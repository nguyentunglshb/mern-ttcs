import React from "react";
import DropDown from "../dropdown/DropDown";
import "./Header.scss";
import logo from "../../assets/logo2.jpeg";
// import Links from "../../components/Links";

function Header() {
  return (
    <div className="header">
      <div className="header-upper">
        <p>SNEAKER AUTHENTIC 100%</p>
      </div>
      <div className="header-main grid wide container row">
        <div className="header-logo col l-2">
          <img src={logo} alt="" />
        </div>
        <div className="header-link-container col l-9">
          {/* <Links /> */}
          <DropDown />
        </div>
        <div className="header-search-wrapper col l-1">
          <button className="header-search">
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <button className="header-cart">
            <ion-icon name="cart-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
