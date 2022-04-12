import React from "react";
import { ShoppingBasket, Storefront, Search } from "@mui/icons-material";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

export default function Header() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <Storefront fontSize="large" className="header__logoImage" />
          <h2 className="header__logoTitle">eShop</h2>
        </div>
      </Link>
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
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasket className="itemBasket" />
            <span className="nav__itemLineTwo nav__basketCount">{cart.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
