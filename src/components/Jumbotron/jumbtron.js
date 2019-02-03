import React from "react";
import "./jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
	<img className = "bgimage" src="../../images/banner.jpg" alt="banner"></img>
		<h1>Mad Men Memory Game</h1>
		<h2>Click on the images to earn points, but don't click on the same picture twice. Click all 12 pics with no repeats to win.</h2>
	</header>
);

export default Jumbotron;