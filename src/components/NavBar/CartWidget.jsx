import React from "react";
import CartIcon from "../assets/Icons/carrito2.png"
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import "./NavBar.css";

export default function CartWidget(){
    const valueContext = useContext(cartContext)
    const { totalItemsInCart } = useContext(cartContext)
    const totalQtyInCart = valueContext.totalQtyInCartfn()

    return(
        <>
             <div className="cart-container">   
                <div className="cart-icon">
                    <img src={ CartIcon } className="icon-cart" alt="cart" />
                </div>
                <div className="cart">
                    <span className="total-item">{totalItemsInCart}</span>
                    <span className="total-item">{totalQtyInCart}</span>
                </div>
            </div>
        </>
    );
};