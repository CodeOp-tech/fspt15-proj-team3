import React from "react";
import "./DashBoard.css";
import illustration from "../Illustrations/zombieing.png";
import relax from "../Illustrations/relax.png";
import move from "../Illustrations/move.png";
import fun from "../Illustrations/fun.png";
import { Link } from "react-router-dom";


function DashBoard() {


	/*const navigate = useNavigate();

	const navigateToFunBreak = () => {
		navigate("/fun");
	};

	const navigateToMoveBreak = () => {
		navigate("/move");
	};

	const navigateToRelaxBreak = () => {
		navigate("/relax");
	};
	*/

	return (
		<div className="App">
			<div className="wrapper">
				<div className="left-container">
					<div className="text-container">
						<h1 className="title-dash">Work hard, rest harder.</h1>
						<p className="p1">
							In our time-pressed and information-rich world, it can be a
							challenge to find a moment for ourselves. BreakTime is a guide to
							the simpler lives we all crave and deserve.
						</p>
						<p className="p2">
							Enjoy a moment of rest and lead a more productive worklife!
						</p>
					</div>
				</div>

				<div className="right-container">
					<img className="dashboard-img" src={illustration} />
				</div>
			</div>

			<div className="features-text">
				<h2 className="features">
					Our <span className="pink-features">Features</span>
				</h2>
			</div>
			<div className="features-box">
				<div className="move-box">
					<img className="features-img move" src={move} />
					<h4>Show your body some love with our streches and exersises.</h4>

					<Link to="/move"><button className="button-outline">LET'S GO!</button></Link>

				</div>
				<div className="relax-box">
					<img className="features-img relax" src={relax} />
					<h4>Calm your mind with unique meditations and music.</h4>

					<Link to="/relax"><button className="button-outline">OOOOM...</button></Link>

				</div>
				<div className="fun-box">
					<img className="features-img" src={fun} />
					<h4>Unwind with jokes, quotes, and much more...</h4>

					<Link to="/funbreak"><button className="button-outline">HAHAHA!</button></Link>

				</div>
			</div>
		</div>
	);
}
export default DashBoard;
