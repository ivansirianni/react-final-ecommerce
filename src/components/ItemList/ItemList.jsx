import React from "react";
import Item from "../Item/Item";
import "./ItemList.css"

export default function ItemList(props) {
	if (Array.isArray(props.products)) {
		return (
			<>
				{props.products.map((item) => {
					return (
						<div className="card-cont">
							<Item
								key={item.id}
								id={item.id}							
								category={item.category}
								img={item.url}							
								name={item.name}
								detail={item.details}
								price={item.price}
								stock={item.stock}
							/>
						</div>
					);
				})}
			</>
		);
	} else {
		return (
			<>
				<Item categoria="Error" />
			</>
		);
	}
}
