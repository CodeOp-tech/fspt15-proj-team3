import { React, useState, useEffect } from "react";

import "./MoveBreak.css";
import ballet from "../Illustrations/ballet.png";
import image1 from "../MoveImages/planJacks.png";
import image2 from "../MoveImages/lunges.png";
import image3 from "../MoveImages/raisedArms.png";
import image4 from "../MoveImages/bandedStanding.png";
import image5 from "../MoveImages/brandedSquats.png";
import image6 from "../MoveImages/highKnees.png";
import image7 from "../MoveImages/lungeJumps.png";
import CountdownTimer from "../Components/CountdownTimer";
import { useContext } from 'react'; 
import { TimerContext } from "../Hooks/TimerContext";
import StartButton from "../Components/StartButton";

function MoveBreak() {
	const [showImages, setShowImages] = useState([
		{
			id: 1,
			src: image1,
			name: "Plank Jacks",
			instructions:
				"1. Start in plank position with your arms extended and hands under your shoulders, feet together. Your body should be in a straight line from your head to your heels. \n" +
				"2. Engage your abs to help protect your lower back from injury.",
		},
		{
			id: 2,
			src: image2,
			name: "Lunges",
			instructions:
				"1. Stand with your feet hip-width apart, keep your back straight, your shoulders back, and your abs tight.\n"+
				"2. Take a step forward and slowly bend both knees, until your back knee is just above the floor. \n"  +
				"3. Stand back up and repeat the movement.\n" +
				"4. Alternate legs until the set is complete.",
		},

		{
			id: 3,
			src: image3,
			name: "Raised Arms Circles",
			instructions:
				"1. Stand straight with your feet shoulder-width apart. \n "  +
				"2. Raise and extend your arms to the sides without bending the elbows. \n " +
				"3. Slowly rotate your arms forward, making small circles of about 1 foot in diameter. \n" +
				"4. Complete a set in one direction and then switch, rotating backward.",
		},

		{
			id: 4,
			src: image4,
			name: "Banded Standing Leg Abduction",
			instructions:
				"1. Loop one end of resistance band around a sturdy object and the other end around your ankle. Stand tall with the looped ankle farthest from the opposite end of the band.\n "+
			    "2. While holding the sturdy object with your inside arm. Lift your outer leg up and straight out to side as far as possible. Pause, then return your leg to the starting position.",
		},

		{
			id: 5,
			src: image5,
			name: "Bunded Squats",
			instructions:
				"1. Stand with your feet slightly more than hip-width apart with a loop or mini loop band just above your knees.\n" +
				"2. Slowly push your hips back into a sitting position while bending your knees.\n" +
				"3. Continue to lower yourself until your thighs are parallel to the floor.\n" +
				"4. Alternate legs until the set is complete..Perform 8–12 reps.",
		},

		{
			id: 6,
			src: image6,
			name: "High Knees",
			instructions:
				"1. Stand with your feet hip-width apart. Lift up your left knee to your chest.\n" +
				"2. Switch to lift your right knee to your chest. Continue the movement, alternating legs and moving at a sprinting or running pace.",
		},

		{
			id: 7,
			src: image7,
			name: "Lunge Jumps",
			instructions:
				"1. Take a large step backward and lower your hips, so that your back knee is just above the floor, and your front thigh is parallel to the floor.\n" +
				"2. Jump into the air and switch leg positions.\n" +
				"3. Jump again and return to the starting position.\n" +
				"4. Repeat the exercise until set is complete.",
		},
	]);


	const [currentImage, setCurrentImage] = useState({
		id: 1,
		src: image1,
		name: "Plank Jacks",
		instructions:
			"1. Start in plank position with your arms extended and hands under your shoulders, feet together. Your body should be in a straight line from your head to your heels \n" +
			"2. Engage your abs to help protect your lower back from injury.",
	},);

	const handleClick = (image) => {
		setCurrentImage(image);
	};

	//To use CountDownTimer start/pause button in StartButton comp
//Passed from App.js as via useContext
let {toggleStart, start} = useContext(TimerContext);


	return (
		<div>
			<div className="title-container">
				<img className="ballet" src={ballet} />
				<h1 className="title-move">
					Your next great idea might be just one
					<span className="blue"> stretch</span> away.
				</h1>
			</div>
			<CountdownTimer/>
      <StartButton
	            start={start}
				toggleStart={toggleStart}/>
			<div className="activities-container">
				<div className="left-cont">
					<div className="featured-activity">
						<h3 className="title-activity">
							{currentImage && currentImage.name}
						</h3>
						<div className="img-activity">
							{currentImage && <img className="image" src={currentImage.src} />}
						</div>
						<h5
							className="instructions"
							data-bs-target="#staticBackdrop"
							data-bs-toggle="modal"
						>
							Instructions
						</h5>
						
					</div>
				</div>

				<div className="right-box">
					<h3 className="more-id">More ideas:</h3>
					{showImages.map((images) => (
            <div className="box-more-ideas">
						<p className="more-ideas" onClick={() => handleClick(images)}>
							{images.name}
						</p>
            </div>
					))}
				</div>
			</div>
			<div>
				<div
					class="modal fade"
					id="staticBackdrop"
					data-bs-backdrop="static"
					data-bs-keyboard="false"
					tabindex="-1"
					aria-labelledby="staticBackdropLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h1 class="modal-title
								modal-title-centered fs-5" id="staticBackdropLabel">
									{currentImage && currentImage.name}
								</h1>
								
							</div>
							<div class="modal-body">
								{currentImage && currentImage.instructions}
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MoveBreak;
