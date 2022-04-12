import React from "react";
import { ShoppingBasket, Storefront, Search } from '@mui/icons-material';
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Storefront fontSize="large" className="header__logoImage" />
        <h2 className="header__logoTitle">eShop</h2>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello, Guest!</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__itemBasket">
          <ShoppingBasket className="itemBasket" />
          <span className="nav__itemLineTwo nav__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}