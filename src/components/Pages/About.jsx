import React from "react"
import {Outlet} from "react-router-dom"

export default function AboutUs()  {
    return (
        <div className="home-container">
        <div className="content">
            <h1 className="title">Mother Eart Sustainable & Agroecological Food</h1>
            <p className="paragraph">Please welcome to our digital store. We are happy you are here.</p>
            <p className="paragraph">We really care the world we live, so,  doing our part of climate change stopping, we decided to focus on one of the main points of Climate Changing - Agriculture</p>
            <p className="paragraph">According to that, we decided to not to use any chemical products on earth and farming agroecological fruits and vegetable. On this line, we are starting to sell agroecological packs. Please, check them out</p>             
            
        </div>
        <Outlet />
    </div>
    )
}