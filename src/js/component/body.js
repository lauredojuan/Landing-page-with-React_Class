import React, { Component } from "react";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";

export class Body extends Component {
	render() {
		return (
			<div className="container mt-3">
				<Jumbotron />
				<Card />
			</div>
		);
	}
}
