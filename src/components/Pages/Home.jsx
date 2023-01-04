import {Outlet} from "react-router-dom"
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import logo from "../assets/Icons/IvoDev.png"
import "./style.css"



function Home() {
    return(
        <div className="home-container">
            <div className="content">
                <img src={logo} className="content-img" alt="logo" />
                <h1 className="title">
                    IvoDev Gaming Store
                </h1>                                
            </div>
            <div>
                 <p className="content-p">Check Out All our products</p>
            </div>
            <div className="items-container">
                <ItemListContainer />
            </div>
            <Outlet />
        </div>
    )
}

export default Home;