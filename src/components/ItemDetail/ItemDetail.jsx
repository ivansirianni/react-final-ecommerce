import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import "./ItemDetail.css";
import { cartContext } from "../../storage/cartContext";

export default function ItemDetail(props) {
	const [qtyInCart, setQtyInCart] = useState(0);

	const { addToCart, removeItem, emptyCart } = useContext(cartContext);

	let urlCategoryDetail = `/category/${props.product.category}`;

	if (props.product === "Item Not Found" || props.product.id === undefined) {
		return (
			<div className="cartCardDetail">
				<div className="cartCard"></div>
				<div className="cartCardDetail-content">
					<p className="cartCardDetail-content__category">Error</p>
					<p className="cartCardDetail-content__title">Product Not Found</p>
					<p className="cartCardDetail-content__body">
						We could not match any product. Please, try again
					</p>
				</div>
			</div>
		);
	} else {
		function handleAddToCart(cartQty) {
			setQtyInCart(cartQty);
			addToCart(props.product, cartQty);
		}

		function handleRemoveItem(itemShownOnScreen) {
			removeItem(itemShownOnScreen);
		}

		function handleEmptyCart(cart) {
			emptyCart(cart);
		}

		return (
			<>
				<div className="cartCardDetail">					
					<div className="cartCardDetail-content">
						<div className="div1">
							<img src={props.product.url} className="img-detail" alt="img" />
							<p className="title-detail">
								{props.product.name}
							</p>
							<p className="details-detail">{props.product.details}</p>
						</div>
						<div className="div2">
							<div className="price-detail">
								<span>U$s {props.product.price}</span>
							</div>
							<span className="stock-detail">
								Stock: {props.product.stock} 
							</span>{" "}
							<div className="count-detail">
								<ItemCount
									onHandInventory={props.product.stock}
									itemShownOnScreen={props.product.id}
									onAddToCart={handleAddToCart}
									onRemoveItem={handleRemoveItem}
									onEmptyCart={handleEmptyCart}
								/>
								
								{" "}
								<span>
									<Link to="/cart">
										<Button className="button-cart">To Cart</Button>
									</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
