import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "../ItemList/ItemList.css";

export default function Item(props) {
		

		return (
			<>
				<div className="card body mt-3 bg-black border border-primary">
                    <div className ="my-3">
                    <img src={props.img} className="card-img" alt="item"/>
                    <h2 className="card-title text-white">{props.name} </h2> 
                    <p className="card-text"> Price: u$s {props.price} </p>
                    <Link to={`/item/${props.id}`} >
                       <Button className="btn"> View More </Button>
                    </Link>        
                    </div>
                </div>
			</>
		);
	}

