import React from "react";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import "./NavBar.css";

export default function CartWidget(){
    const valueContext = useContext(cartContext)
    const totalItemsInCart = valueContext.totalItemsInCartfn()
    const totalQtyInCart = valueContext.totalQtyInCartfn()

    return(
        <>
             <div className="cart-container">   
                <div className="cart-icon">
                    <span className="nav-cart">🛒</span>
                </div>
                <div className="cart">
                    <span className="total-item">{totalItemsInCart}</span>
                    <span className="total-item">{totalQtyInCart}</span>
                </div>
            </div>
        </>
    );
};