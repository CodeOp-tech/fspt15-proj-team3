import React, { useState, useEffect } from "react";
import meditating from "../Illustrations/meditating.png";
import "./RelaxBreak.css";
import video1 from "../Videos/video1.mp4";
import video2 from "../Videos/video2.mp4";
import video3 from "../Videos/video3.mp4";
import video4 from "../Videos/video4.mp4";
import video5 from "../Videos/video5.mp4";
import video6 from "../Videos/video6.mp4";
import video7 from "../Videos/video7.mp4";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CountdownTimer from "../Components/CountdownTimer";
import "react-alice-carousel/lib/alice-carousel.css";
import StartButton from "../Components/StartButton";
import { useContext } from "react";
import { TimerContext } from "../Hooks&Context/TimerContext";
import { useCountdown } from "../Hooks&Context/useCountDown";

function RelaxBreak() { 
 
//To use CountDownTimer start/pause button in StartButton comp
//Passed from App.js as via useContext
let {toggleStart, targetMin, setTargetMin, setTimer, timer, start} = useContext(TimerContext);

//const [resetTimer] = useCountdown(targetMin, start, setStart, setTimer, timer, countDownTime);

	const items = [
		<div className="item" >
			<video data-value="1" width="300" controls className="media">
				<source src={video1} type="video/mp4" />
			</video>
		</div>,
		<div className="item" >
			<video data-value="2" width="300" controls className="media">
				<source src={video2} type="video/mp4" />
			</video>
		</div>,
		<div className="item" >
			<video data-value="3" width="300" controls className="media">
				<source src={video3} type="video/mp4" />
			</video>
		</div>,
		<div className="item" >
			<video data-value="4" width="300" controls className="media">
				<source src={video4} type="video/mp4" />
			</video>
		</div>,
		<div className="item" >
			<video data-value="5" width="300" controls className="media">
				<source src={video5} type="video/mp4" />
			</video>
		</div>,
		<div className="item" key={6}>
			<video data-value="6" width="300" controls className="media">
				<source src={video6} type="video/mp4" />
			</video>
		</div>,

		<div className="item">
			<video data-value="7" width="300" controls className="media">
				<source src={video7} type="video/mp4" />
			</video>
		</div>,
	];

	//matches targetMin with timing of each video
	function matchTimer(mainIndex) {
		console.log("MainIndex" + mainIndex)
		if (mainIndex === 0) {
			setTargetMin(4.017)
		}

		if (mainIndex === 1) {
			setTargetMin(5.648)
		}

		if (mainIndex === 2) {
			setTargetMin(5.339)
		}

		if (mainIndex === 3) {
			setTargetMin(4.82)
		}

		if (mainIndex === 4) {
			setTargetMin(2.85)
		}

		if (mainIndex === 5) {
			setTargetMin(3.34)
		}

		if (mainIndex === 6) {
			setTargetMin(8.819)
		}
	}

	
	const [mainIndex, setMainIndex] = useState(0);

	const slideNext = () => {
		if (mainIndex < items.length - 1) {
			setMainIndex(mainIndex + 1);
		}
	};

	const slidePrev = () => {
		if (mainIndex > 0) {
			setMainIndex(mainIndex - 1);
		}
	};


	//updates timer with targetMin set in matchTimer
	useEffect(()=> {
			setTimer(targetMin * 60 * 1000)
			console.log("timer", timer)
		}, [mainIndex, targetMin])

	
	return (
		<div>
			<div className="container-relax">
			<img className="meditating" src={meditating} />
			<h1 className="title-relax">
				Take it one <span className="pink">breath</span> at a time.
			</h1>

	
			</div>
			<div>
				<CountdownTimer />
				<StartButton toggleStart={toggleStart}
				             start={start} />
			</div>

			<div className="container"></div>

			<div className="carousel">
				<AliceCarousel
					activeIndex={mainIndex}
					disableDotsControls
					disableButtonsControls
					items={items}
					onSlideChange={matchTimer(mainIndex)}
				/>

				<div className="btn-prev" onClick={slidePrev}>
					&lang;
				</div>
				<div className="btn-next" onClick={slideNext}>
					&rang;
				</div>
			</div>
		</div>
	);
}

export default RelaxBreak;
