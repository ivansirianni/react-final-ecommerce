import React, { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import Cart from "../Cart/Cart";

export default function CartContainer() {
	const { cart } = useContext(cartContext);
	return (
		<>
			{cart.map((item) => {
				return (
					<>
						<Cart
							key={item.id}
							id={item.id}							
							category={item.category}
							img={item.url}							
							name={item.name}
							detail={item.details}
							price={item.price}
							stock={item.stock}
							cartQty={item.cartQty}
						/>
					</>
				);
			})}
		</>
	);
}
