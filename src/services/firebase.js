// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	addDoc,
	updateDoc,
	getFirestore,
	doc,
	getDoc,
	collection,
	getDocs,
	query,
	where,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUznTZUKLkz4chjf4bXNC3iIy5M_BBkMI",
    authDomain: "ivodev-ecommerce.firebaseapp.com",
    projectId: "ivodev-ecommerce",
    storageBucket: "ivodev-ecommerce.appspot.com",
    messagingSenderId: "239785739972",
    appId: "1:239785739972:web:a22ce7de0266ceb2c5eb91"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



export async function getSingleItem(id) {
	const docRef = doc(db, "items", id);

	const docSnapshot = await getDoc(docRef);
	const item = docSnapshot.data();
	item.id = docSnapshot.id;

	return item;
}

export async function getItems() {
	const collectionRef = collection(db, "items");

	const docsSnapshot = await getDocs(collectionRef);

	const docsArray = docsSnapshot.docs;

	const dataDocs = docsArray.map((doc) => {
		return { ...doc.data(), id: doc.id };
	});

	return dataDocs;
}

export async function getItemsCategory(categoryID) {
	const collectionRef = collection(db, "items");

	const q = query(collectionRef, where("category", "==", categoryID));

	const docsSnapshot = await getDocs(q);
	const docsArray = docsSnapshot.docs;

	const dataDocs = docsArray.map((doc) => {
		return { ...doc.data(), id: doc.id };
		
	});
	return dataDocs;
}

//generar orden de compra
const createOrder = async (client, totalPric, date) => {
    const ordenCompra = await addDoc(collection(db, "NewOrder"), {
        name: client.name,
        lastname: client.lastname,
        email: client.email,        
        cell:client.cell, 
		date: date,     
        totalPrice: totalPric
    })

    return ordenCompra
}

const getOrder = async(id) => {
    const item = await getDoc(doc(db, "newOrder", id))
    const ordenCompra = {...item.data(), id: item.id}
    return ordenCompra
}

const updateProd = async(id, info) => {
    const estado = await updateDoc(doc(db, "productos",id), info)
    return estado
}

export {createOrder, getOrder, updateProd}
