import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { getItems, getItemsCategory } from "../../services/firebase";

export default function ItemListContainer() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { categoryID } = useParams();

	useEffect(() => {
		setIsLoading(true)
		if (categoryID === undefined) {
			getItems()
				.then((resp) => {
					setProducts(resp);
					setIsLoading(false);
				})
				.catch((error) => {
					console.error(
						"Error ItemListContainer.jsx --> getItems():",
						error
					);
					setIsLoading(false);
				});
		} else {
			getItemsCategory(categoryID)
				.then((respFil) => {
					setProducts(respFil);
					setIsLoading(false);
				})
				.catch((errorMsg) => {
					console.error(
						"Error ItemListContainer.jsx --> getItemsCategory(categoryID):",
						errorMsg
					);
					setProducts(errorMsg);
					setIsLoading(false);
				});
		}
	}, [categoryID]);

	return <>{isLoading ? <Loader /> : <ItemList products={products} />}</>;
}
