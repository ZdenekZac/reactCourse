import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [advice, setAdvice] = useState("");
	const [count, setCount] = useState(0);

	async function getAdvice(){
		const res = await fetch("https://api.adviceslip.com/advice");
		console.log(res);
		const data = await res.json();
		console.log(data);
		setAdvice(data.slip.advice);
		setCount((c)=> c + 1);
	}

	function reset(){
		setCount(0);
		setAdvice("");
	}

	useEffect(function(){
		getAdvice()
	},[]);

	return(
		<>
		<button onClick={getAdvice}>Get Advice</button>
		<div>{advice}</div>
		<div>{count}</div>
		<button onClick={reset}>Reset</button>
		</>
	)
}

export default App
