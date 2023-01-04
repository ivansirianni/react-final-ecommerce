import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Cart.css";
import { cartContext } from "../../storage/cartContext";
import ItemsEmpty from "../ItemCount/ItemsEmpty";

export default function Cart(props) {
	const { removeItem } = useContext(cartContext);	
	let unidOunids = props.cartQty > 1 ? "Products" : "Product";
	
	
	

	return (
		<>
			<div className="purchaseCard">
				
				<div className="cartCard-content">					
					<img src={props.img} className="img-cart" alt="img" />
					<div className="info-cart">
						<p className="purchaseCard-content__title">{props.name}</p>
						<p className="purchaseCard-content__body">{props.details}</p>
					</div>
					<div className="purchaseCard-content__priceQty">
						<span>
							Total ${(props.price * props.cartQty).toLocaleString()} -{" "}
							{props.cartQty.toLocaleString()} {unidOunids}
						</span>
						<Button	onButtonClick={() => removeItem(props.id)} className="button-cart__topRight">
								Remove 🗑
						</Button>
					</div>
					
				</div>
				
			</div>
			
		</>
	);
}

export function CartTotal() {
	const valueContext = useContext(cartContext);
	const totalValueInCart = valueContext.totalValueInCartfn();
	const { emptyCart } = useContext(cartContext);

	function handleEmptyCart(cart) {
		emptyCart(cart);
	}
	let totalQtyInCart = valueContext.totalQtyInCartfn();

	let unidOunids = totalQtyInCart > 1 ? "Products" : "Product";

	if (!totalQtyInCart) {
		return (
			<>
				<div className="display-1--subtitle">Cart is Empty.</div>
				<iframe src="https://giphy.com/embed/jtECu4KjK3cqiAUMyR" width="480" height="398" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
				<Link to="/" className="cart-link">
				 	➡ Go Back Home and Check Out Our Store ⬅
				</Link>
			</>
		);
	}

	return (
		<>
			<div className="total-amount">
				<div>
					<div>
						<span>
							Total Amount ${totalValueInCart.toLocaleString()} -{" "}
							{totalQtyInCart.toLocaleString()} {unidOunids}
						</span>
						<ItemsEmpty	onEmptyCart={handleEmptyCart} />
					</div>
				</div>
			</div>
		</>
	);
}
