import React from "react";
import "./Home.css";
import Product from "./Product.js"

export default function Home() {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img src="https://t4.ftcdn.net/jpg/03/20/46/13/360_F_320461388_5Snqf6f2tRIqiWlaIzNWrCUm1Ocaqhfm.jpg" alt="" className="home__image" />
                <div className="home__row">
                    <Product 
                        id="1"
                        title="Elgato Game Capture HD60S"
                        price={180.00}
                        rating={5}
                        image="https://www.pngkey.com/png/full/377-3771514_capture-card-elgato-hd60s-portable-charger-transparent.png"
                    />
                    <Product 
                        id="2"
                        title="Elgato Stream Deck"
                        price={128.00}
                        rating={5}
                        image="http://assets.stickpng.com/images/5e90ab57c7c8f9000434dd9e.png"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="3"
                        title="Retro 3-in-1 Family Size Electric Breakfast Station"
                        price={99.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/813lCdjl5eL._AC_SL1500_.jpg"
                    />
                    <Product 
                        id="4"
                        title="Personal Non-Stick Waffle Maker"
                        price={14.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71i7kHL06cL._AC_SL1500_.jpg"
                    />
                    <Product 
                        id="5"
                        title="Rapid Brew 12-Cup Programmable Coffee Maker"
                        price={69.99}
                        rating={4}
                        image="https://media.kohlsimg.com/is/image/kohls/4552488?wid=1200&hei=1200&op_sharpen=1"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="5"
                        title="Full 4 Piece Bedroom Set"
                        price={690.00}
                        rating={5}
                        image="https://www.livingspaces.com/globalassets/productassets/200000-299999/240000-249999/247000-247999/247100-247199/247126/247126_brown_wood_bedroom_set_signature_01.jpg?w=1000&h=674&mode=pad"
                    />
                </div>
            </div>
        </div>
    </div>
  );
}