import { useTimer } from "react-timer-hook";
import {useState} from "react"
import Alarm from "../public/alarm.mp3"


export default function MyTimer({ expiryTimestamp }) {

const {
	totalSeconds,
	seconds,
	minutes,
	isRunning,
	start,
	pause,
	resume,
	restart,
} = useTimer({
	expiryTimestamp,
	onExpire: () => alarmSound.play(),
	autoStart: false,
});

const alarmSound = new Audio(Alarm)


const [isClicked, setIsClicked] = useState(false)
return (
	<div className="container" style={{ textAlign: "center" }}>
	<h1>Pomodoro Timer</h1>
	<p>Focus on your work for:</p>
	<div style={{ fontSize: "100px" }}>
		<span>{minutes}</span>:<span>{seconds}</span>
	</div>
	<p>{isRunning ? "Running" : "Not running"}</p>
	<button className="button-left" onClick={() => {
	start();  // Appel de la fonction start
	if (!isClicked) {
		setIsClicked(prevValue => !prevValue);  // Inversion de la valeur de isClicked si isClicked est faux
	}
	}}>
		{isClicked ? "RESUME" : "START"}
	</button>
	<button onClick={pause}>PAUSE</button>
	<button
		onClick={() => {
		// Restarts to 25 minutes timer
		const time = new Date();
		time.setSeconds(time.getSeconds() + 1500);
		restart(time);
		}}
	>
		RESET
	</button>
	<button className="button-right"
		onClick={() => {
		// Restarts to 5 minutes timer
		const time = new Date();
		time.setSeconds(time.getSeconds() + 300);
		restart(time);
		}}
	>
		BREAK
	</button>
	</div>
);
}
