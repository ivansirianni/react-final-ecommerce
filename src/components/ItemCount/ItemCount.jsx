import React, { useState, useContext } from "react";
import Button from "../Button/Button";
import "../ItemDetail/ItemDetail.css";
import "../Button/button.css"
import { cartContext } from "../../storage/cartContext";

function ItemCount(props) {
	const { onHandInventory, onAddToCart, onRemoveItem, onEmptyCart, itemShownOnScreen } = props;

	const MAX_ITEM_INVENTORY = onHandInventory;

	const [cartQty, setCartQty] = useState(1);

	const { cart } = useContext(cartContext);

	function increaseQty() {
		setCartQty(Math.min(cartQty + 1, MAX_ITEM_INVENTORY));
	}

	function decreaseQty() {
		setCartQty(Math.max(1, cartQty - 1));
	}

	return (
		<>
			<div className="display-1--subtitle">
				<Button onButtonClick={increaseQty} className="button-cart">
					+
				</Button>
				<span className="display-1--description"> {cartQty} </span>
				<Button onButtonClick={decreaseQty} className="button-cart">
					-
				</Button>
			</div>
			<div className="display-1--subtitle">
				<span>
					<Button
						onButtonClick={() => onAddToCart(cartQty)}
						className="button-cart"
					>
						Add to Cart
					</Button>
				</span>
				<span>
					<Button
						onButtonClick={() => onRemoveItem(itemShownOnScreen)}
						className="button-cart"
					>
						Remove Item
					</Button>
				</span>
				<span>
					<Button
						onButtonClick={() => onEmptyCart(cart)}
						className="button-emptycart"
					>
						Clean the Cart
					</Button>
				</span>
			</div>
		</>
	);
}
export default ItemCount;
