import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App(){
	return (
		<div className='container'>
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header(){
	//const style = {color: 'red', fontSize: "48px", textTransform:"uppercase"};
	const style = {};
	return (
		<header className='header'>
			<h1 style={style}>Fast React Pizza Co.</h1>;
		</header>
	) 
}

function Menu(){
	return (
		<main className='menu'>
			<h2>Our menu</h2>
			<Pizza 
				name='Pizza Spinachi' 
				ingredient='Tomato, mozzarella, spinach and ricotta cheese'
				photoName='pizzas/spinaci.jpg'
				price={10}/>
			<Pizza name="Pizza Funghi" ingredient="Tomato, mushrooms" price={12} photoName="pizzas/funghi.jpg"/>
		</main> 
		)
}

function Pizza(props){
	console.log(props);
	
	return (
	<div className='pizza'>
		<img src={props.photoName} alt={props.name}/>
		<div>
			<h3>{props.name}</h3>
			<p>{props.ingredients}</p>
			<span>{props.price + 3}</span>
		</div>
	</div>
	);
}


function Footer(){

	const hour = new Date().getHours();
	const openHour = 9;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log(isOpen);
	// if(hour >= openHour && hour <= closeHour)alert("It's open!!");
	// else alert("we are closed :(");

	return(
		<footer className='footer'>
			{new Date().toLocaleTimeString()}. We're currently open!
		</footer>
	) 
	//return React.createElement('footer', null, "We're currently open!!" )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

