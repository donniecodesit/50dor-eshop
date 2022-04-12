import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "../../StateProvider";

export default function Checkout() {
  const [{cart}, dispatch] = useStateValue();
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
            <div>
                <h2 className="checkout__title">Your Shopping Cart</h2>
                {cart.map((item, index) => (
                  <CheckoutProduct
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                    key = {index}
                  />
                ))}
            </div>
        </div>
        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  );
}