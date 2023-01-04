import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";
import "./components/ItemList/ItemList.css";
import "./components/Cart/Cart.css";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Home  from "./components/Pages/Home"
import About from "./components/Pages/About"

import CartContainer from "./components/CartContainer/CartContainer";
import { CartTotal } from "./components/Cart/Cart";
import { CartContextProvider } from "./storage/cartContext";

function App() {
	return (
		<>
		<CartContextProvider>
				<BrowserRouter>
					<div className="App grid--container">
						<NavBar />
						<section id="main">
							<Routes>								
								<Route path="/category/:categoryID"
									element={
										<>		
											<div className="cat-item">
												<ItemListContainer />
											</div>
										</>
									}
								/>
								<Route	path="/item/:itemID" element={<ItemDetailContainer />}/>							
								<Route path="/"	element={ <Home />	} />							
								<Route path="/about" element={ <About />	} />								
								<Route path="/cart" element={
																		
												<div className="purchaseCards--container">
													<CartTotal />
													<CartContainer />
												</div>																		
									}
								/>
								<Route path="*" element={<><h1>Error 404: Page Not Found.</h1></>}/>						
							</Routes>					
						</section>							
					</div>							
				</BrowserRouter>
			</CartContextProvider>
		</>
	);
}						
										
									
								
							
						
						
					
				

export default App;


