import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

	// const [step, setStep] = useState(1);
	// const [isOpen, setIsOpen] = useState(true);

	// function handlePrev(){
	// 	if(step > 1) setStep(step - 1);
	// }
	// function handleNext(){
	// 	if(step < 3) setStep(step + 1);
	// }

	// return(
	// 	<>
	// 		<span className="close" onClick={(()=> setIsOpen(!isOpen))}>&times;</span>
	// 		{isOpen && 
	// 	<div className="steps">
	// 		<div className="numbers">

	// 		<div className= "active">1</div>
	// 		<div className={step > 1 ? "active" : ""}>2</div>
	// 		<div className={step > 2 ? "active": ""}>3</div>
	
	// 		</div>
	// 		<p className="message">Step {step}: {messages[step - 1]}</p>

	// 		<div className="buttons">
	// 		<button style={{ backgroundColor: "#7950f2", color:"#fff" }} onClick={handlePrev} ><span>prev</span></button>
	// 		<button style={{ backgroundColor: "#7950f2", color:"#fff" }} onClick={handleNext}><span>next</span></button>
	// 		</div>
	// 	</div>
	// 	}
	// 	</>)