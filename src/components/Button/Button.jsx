import React from "react";
import "./button.css";

export default function Button(props) {
	return (
		<button
		onClick={props.onButtonClick}
			className={props.className}
			title={props.title}
		>{props.children || props.text}
		</button>
	);
}
