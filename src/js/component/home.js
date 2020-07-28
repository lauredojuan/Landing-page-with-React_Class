import React, { Component } from "react";
import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";
import { Body } from "./body.js";

export class Home extends Component {
	render() {
		return (
			<div className="container-fluid mb-3">
				<Navbar />
				<Body />
				<Footer />
			</div>
		);
	}
}
