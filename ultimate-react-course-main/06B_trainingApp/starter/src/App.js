import { useState } from "react";
import "./App.css";
import { hats, bicycles } from "./items.js";
console.log(hats, bicycles);


const dropdownMenuItems = [
	{name: "hats", value:"hats"},
	{name: "bicycles", value:"bicy"},
	{name: "shoes", value:"shoes"},
	{name: "eyeglasses", value:"eyes"},
	{name: "hoodies", value:"hoodies"},
	{name: "t-shirts", value:"tshirts"},
]


export default function App() {
	
  return (
    <div className="app">
      <Menu />
      <Main />
      <Aside />
	  
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <Dropdown onSelect={(val)=> console.log(val)
	  }/>
	  <img src="/Assets/shopping-cart.svg" alt="shopping_cart" />
      <span className="span-menu">3</span>
    </div>
  );
}

function Dropdown({onSelect}){
	return (
		<div className="dropdown">
			<img src="/Assets/list.svg" alt="menu" />
			<ul className="dropdown-menu">
				{dropdownMenuItems.map((item, i) =>
					<li key={i} onClick={()=> onSelect(item.value)}>{item.name}</li>
				)}
			</ul>
		</div>
	)
}

function Main() {
	const [amount, setAmount] = useState("");
  return <main>
	{/* <Item amount={amount} setAmount={setAmount}/> */}
	{hats.map((h,i)=> 
		<Item header={h.name} key={h.id} i={i + 1} price={h.price}/>
	)}
  </main>;
}

function Item({amount, setAmount, header, i, price }){
	return (
			<div className="item">
        <h3>{header} {i}</h3> 
        <img src="/Assets/beanie.svg" alt="beanie" />
		<h4>Enter amount:</h4>
		<div className="counterContainer">
			<Button onClick={()=> {setAmount(Number(amount + 1));
			}}>+</Button>
			<input type="text" onChange={(e)=> e.target.value} value={amount} id="1" name="counter"/>
			{/* <span>{amount}</span> */}
			<Button onClick={()=> setAmount(Number(amount - 1))}>-</Button>
		</div>
		<h4>Price:</h4>
		<h3>$ {price}</h3>
		<Button>Add to Cart</Button>
	</div>
	)
}

function Aside() {
  return <aside>Aside</aside>;
}

function Button({children, onClick}){
	return <button onClick={onClick}>{children}</button>
}

