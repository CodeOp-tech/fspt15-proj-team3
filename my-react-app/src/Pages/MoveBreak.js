import React from "react";
import "./MoveBreak.css";
import ballet from "../Illustrations/ballet.png";

function MoveBreak() {
	return (
		<div>
			<div className="title-container">
				<img className="meditating" src={ballet} />
				<h1 className="title-move">
					Your next great idea might be just one
					<span className="blue"> stretch</span> away.
				</h1>
			</div>

			<div className="activities-container">
				<div className="left-container">
					<div className="featured-activity">
						<h3 className="title-activity">Title featured activity</h3>
						<div className="img-activity"></div>
						<h5 className="instructions">Instructions</h5>
						<button className="btn-start">START</button>
					</div>
				</div>

				<div className="right-container">
					<h3 className="library">More ideas:</h3>
				</div>
			</div>
		</div>
	);
}

export default MoveBreak;
