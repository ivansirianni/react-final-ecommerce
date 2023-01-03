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
											<div className="col--main">
												<h1>													
													IvoDev Gaming Store													
												</h1>
												
												<div className="cartCards--container">
													<ItemListContainer />
												</div>
											</div>
										</>
									}
								/>
								<Route	path="/item/:itemID" element={
										<>
											<div className="col--main">
												<h1>
													<div className="display-1-intro">
														IvoDev Gaming Store
													</div>
												</h1>
												<div className="display-1--subtitle">
													Details
												</div>
												<div className="cartCardDetail--container">
													<ItemDetailContainer />
												</div>
											</div>
										</>
									}
								/>
								<Route path="/"	element={ <Home />	} />							
								<Route path="/about" element={ <About />	} />								
								<Route path="/cart" element={
										<>
											<div className="col--main">
												<h1>
													<div className="display-1-intro">
														IvoDev Gaming Store
													</div>
												</h1>
												<div className="display-1--subtitle">
													Cart
												</div>
												<div className="purchaseCards--container">
													<CartTotal />
													<CartContainer />
												</div>
											</div>
										</>
									}
								/>
								<Route
									path="*"
									element={
										<>
											<h1>
												<div className="display-1-intro">
													Error 404: Page Not Found.
												</div>
											</h1>
										</>
									}
								/>
							</Routes>
						</section>
						
					</div>
				</BrowserRouter>
			</CartContextProvider>
		</>
	);
}

export default App;


