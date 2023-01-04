import React, { useContext } from "react";
import Button from "../Button/Button";
import "../ItemDetail/ItemDetail.css";
import "../Button/button.css"
import { cartContext } from "../../storage/cartContext";

function ItemsEmpty(props) {
	const { onEmptyCart } = props;
	const { cart } = useContext(cartContext);
	
	return (
		<>
			<div className="display-1--subtitle">		
				
					<Button	onButtonClick={() => onEmptyCart(cart)}	className="button-emptycart">
						Clean the Cart
					</Button>
				
			</div>
		</>
	);
}
export default ItemsEmpty;