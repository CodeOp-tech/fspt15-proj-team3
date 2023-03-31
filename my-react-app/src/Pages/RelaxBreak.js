import React, { useState } from "react";
import meditating from "../Illustrations/meditating.png";
import "./RelaxBreak.css";
import video1 from "../Videos/video1.mp4";
import video2 from "../Videos/video2.mp4";
import video3 from "../Videos/video3.mp4";
import video4 from "../Videos/video4.mp4";
import video5 from "../Videos/video5.mp4";
import video6 from "../Videos/video6.mp4";
import video7 from "../Videos/video7.mp4";
import video8 from "../Videos/video8.mp4";
import AliceCarousel from "react-alice-carousel";
import CountdownTimer from "../Components/CountdownTimer";
import "react-alice-carousel/lib/alice-carousel.css";
import StartButton from "../Components/StartButton";
import { useCountdown } from "../Hooks/useCountDown";
import { useContext } from 'react'; 
import { TimerContext } from "../Hooks/TimerContext";

function RelaxBreak() {

let {targetMin} = useContext(TimerContext);
const [toggleStart] = useCountdown(targetMin);

const handleDragStart = (e) => e.preventDefault();

	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items: 5 },
	};

	const items = [
		<video className="video" width="300">
			<source src={video2} type="video/mp4" />
		</video>,
		
		<video className="video" width="300">
			<source src={video4} type="video/mp4" />
		</video>,
        <video className="video" width="300">
        <source src={video3} type="video/mp4" />
    </video>,
		<video className="video" width="300">
			<source src={video5} type="video/mp4" />
		</video>,

		<video className="video" width="300">
			<source src={video6} type="video/mp4" />
		</video>,
		<video className="video" width="300">
			<source src={video7} type="video/mp4" />
		</video>,
		<video className="video" width="300">
			<source src={video8} type="video/mp4" />
		</video>,
	];

	return (
		<div>
			<h1 className="title-relax">
				Take it one <span className="pink">breath</span> at a time
			</h1>
			<img className="meditating" src={meditating} />
			<div>
				<CountdownTimer/>
			</div>
			<div className="container">
				<div className="video">
					<video width="750" height="500" controls>
						<source src={video1} type="video/mp4" />
					</video>
				</div>


				<StartButton
				toggleStart={toggleStart}/>

			</div>
            <h2 className="library">
					Browse our library:
				</h2>
			<div className="carousel-wrapper">
				<AliceCarousel
					mouseTracking
					responsive={responsive}
					disableButtonsControls
					items={items}
				/>
			</div>
		</div>
	);
}
export default RelaxBreak;
