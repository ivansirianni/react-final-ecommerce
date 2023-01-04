import React from "react"
import {Outlet} from "react-router-dom"
import { Link } from "react-router-dom";
import consoles from "../assets/Images/consoles.jpg"

export default function AboutUs()  {
        return (
        <div className="about-container">
            <div className="img-container">
                <img src={consoles} className="about-img" alt="" />
            </div>
            <div className="content-about">
                <h1 className="title-about">IvoDev Gaming Store</h1>
                <h3 className="subtitle-about">Hello dude and welcome to my Gaming Store.</h3> 
                <p className="paragraph">Hi,I'm Ivan and i will tell you a bit about my Gaming Store.</p>                          
                <p className="paragraph">This Gaming store is dedicated to share diferent kinds of computers and accesories to make your gaming experience real. We offer diferent prices and technologies to allow you to access to this futuristic experience. Let's take your gaming experience to the next level!</p>
                <p className="paragraph">Please check out our products below</p>
            </div>
            <div className="link-container">
                <div>
                    <Link to="/category/Gaming-PC" className="about-link"><button className="btn">Check out our Gaming PC</button>                       
                    </Link>
                </div>
                    <div>
                    <Link to="/category/Accesories" className="about-link">
                    <button className="btn">Check out our Gaming Accesories</button>
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}