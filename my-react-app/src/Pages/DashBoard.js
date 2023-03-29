import React from "react";
import "./DashBoard.css";
import illustration from "../Illustrations/zombieing.png";
import relax from "../Illustrations/relax.png";
import move from "../Illustrations/move.png";
import fun from "../Illustrations/fun.png";

function DashBoard() {
	return (
		<div className="App">
			<div className="wrapper">
				<div className="left-container">
					<div className="text-container">
						<h1 className="title">Work hard, rest harder.</h1>
						<p className="p1">
							In our time-pressed and information-rich world, it can be a
							challenge to find a moment for ourselves. BreakTime is a guide to
							the simpler lives we all crave and deserve.
						</p>
						<p className="p2">
							Enjoy a moment of rest and lead a more productive worklife!
						</p>
						<button>DISCOVER MORE</button>
					</div>
				</div>

				<div className="right-container">
					<img className="dashboard-img" src={illustration} />
				</div>
			</div>

			<div className="features-text">
				<h2 className="features">Our </h2>
				<h2 className="pink-features">Features</h2>
			</div>
			<div className="features-box">
				<div className="move-box">
					<img className="features-img move" src={move} />
					<h4>Show your body some love with our streches and exersises.</h4>
					<button className="button-outline">LET'S GO!</button>
				</div>
				<div className="relax-box">
					<img className="features-img" src={relax} />
					<h4>Calm your mind with unique meditations and music.</h4>
					<button className="button-outline">OOOOM...</button>
				</div>
				<div className="fun-box">
					<img className="features-img" src={fun} />
					<h4>Unwind with jokes, quotes, and much more...</h4>
					<button className="button-outline">HAHAHA!</button>
				</div>
			</div>
		</div>
	);
}
export default DashBoard;
