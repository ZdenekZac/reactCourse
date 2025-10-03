import { useState, useEffect } from "react";

export default function App2(){
	const [result, setResult] = useState()
	const [message, setMessage] = useState()

	useEffect(function(){
		async function fetchData(){
			try{
				setResult(r => r = true)
				const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
				const data = await res.json()
				setMessage(data.title)
				setResult(true)
			}
			catch(err){
				console.error(err.message)
				setMessage(err.message)
				setResult(false)
			}
			finally{
				console.log(result);
				setMessage( result ? "all good pal" : "go fix da shite");
			}
		}
		fetchData()
	},[result])


	return <p>{message}</p>
}