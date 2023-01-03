import products from "../components/data/mockdata";

//import products from "https://635d78e707076ac24f3dbf4a.mockapi.io/productos";

export default function getItems() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products);
		}, 2000);
	});
}

export function getItemsCategory(categoryID) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let itemsFound = products.filter((item) => {
				return item.category === categoryID;
			});

			if (itemsFound.length > 0) {
				resolve(itemsFound);
			} else {
				reject("There are not any products.");
			}
		}, 1000);
	});
}

export function getSingleItem(itemID) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let itemFound = products.find(
				(itemInArray) => itemInArray.id === parseInt(itemID)
			);
			if (itemFound) {
				resolve(itemFound);
			} else {
				reject("Item not found");
			}
		}, 1000);
	});
}
