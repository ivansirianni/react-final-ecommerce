import {Outlet} from "react-router-dom"
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./style.css"



function Home() {
    return(
        <div className="home-container">
            <div className="content">
                <h1 className="title">
                    IvoDev Gaming Store
                </h1>                                
            </div>
            <div>
                 <p>Check Out All our products</p>
            </div>
            <div className="items-container">
                <ItemListContainer />
            </div>
            <Outlet />
        </div>
    )
}

export default Home;