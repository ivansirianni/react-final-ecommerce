import { createContext, useState } from "react";
const cartContext = createContext({ cart: [] });
const Provider = cartContext.Provider;

function CartContextProvider(props) {
	const [cart, setCart] = useState([]);

	function addToCart(item, cartQty) {
		let indexItemInCart = cart.findIndex(
			(itemInContext) => itemInContext.id === item.id
		);
		const newCart = [...cart];

		if (indexItemInCart !== -1) {
			newCart[indexItemInCart].cartQty = Math.min(
				newCart[indexItemInCart].stock,
				newCart[indexItemInCart].cartQty + cartQty
			);
			setCart(newCart);
		} else {
			newCart.push({ ...item, cartQty });
			setCart(newCart);
		}
	}

	function removeItem(itemShownOnScreen) {
		let itemInCartID = cart.findIndex(
			(itemInContext) => itemInContext.id === itemShownOnScreen
		);

		const newCart = [...cart];

		if (itemInCartID !== -1) {
			newCart.splice(itemInCartID, 1);
			setCart(newCart);
		} else {
			console.error(
				"cartContext.jsx --> (cart) Item not found."
			);
		}
	}

	function emptyCart() {
		setCart([]);
	}

	function totalQtyInCartfn() {
		return cart.reduce((acc, item) => acc + item.cartQty, 0);
	}

	function totalValueInCartfn() {
		return cart.reduce((acc, item) => acc + item.cartQty * item.price, 0);
	}

	function totalItemsInCartfn() {
		return cart.length;
	}

	return (
		<Provider
			value={{
				cart,
				addToCart,
				removeItem,
				emptyCart,
				totalItemsInCartfn,
				totalQtyInCartfn,
				totalValueInCartfn,
			}}
		>
			{props.children}
		</Provider>
	);
}

export { cartContext, CartContextProvider };
