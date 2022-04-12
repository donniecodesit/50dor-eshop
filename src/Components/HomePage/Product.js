import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";

export default function Product({id, title, price, rating, image}) {
  const [state, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        rating: rating,
        price: price,
        image: image
      }
    })
  }

  return (
    <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill().map((_, i) => ( <p key={i}>⭐</p> ))}
            </div>
        </div>
        <img src={image}/>
        <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
}