import { useState, useTransition } from "react";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

export default function App() {
	const [number, setNumber] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	function handlePrev(){
		if(number > 1) setNumber(number - 1)
	}

	function handleNext(){
		if(number < 3) setNumber(number + 1)
	}

	return(
		<>
			<button className="close" onClick={()=> setIsOpen(!isOpen)}>&times;</button>
			{isOpen &&
				(
			<div className="steps">
				<div className="numbers">
					<div className={number >= 1 ? "active" : ""}>1</div>
					<div className={number >= 2 ? "active" : ""}>2</div>
					<div className={number >= 3 ? "active" : ""}>3</div>
				</div>
				<p className="message">Step {number}: {messages[number - 1]}</p>
				<div className="buttons">
					<button onClick={handlePrev}>prev</button>
					<button onClick={handleNext}>next</button>
				</div>
			</div>
			)
		}
		</>
	)
}
