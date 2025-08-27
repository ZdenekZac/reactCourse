import { useState } from "react";
import "./App.css";
import {dropdownMenuItems, hats, bicycles, glasses, shoes, hoodies, tshirts } from "./items.js";

export default function App() {
	const [sortBy, setSortBy] = useState("");
	const [items, setItems] = useState();

	function handleSetDropdown(val){
		setItems(
			val === "hats"     ? hats : val === "bicy"     ? bicycles :
			val === "shoes"    ? shoes : val === "glasses"  ? glasses :
			val === "hoodies"  ? hoodies : val === "tshirts"  ? tshirts :
			[]
		);
			handleSetSortBy("-")
	}

	function handleSetSortBy(val){
		setSortBy(val)
	}

  return (
    <div className="app">
      <Menu onSetDropdown={handleSetDropdown} />
      <Main  items={items} sortBy={sortBy} onSortBy={handleSetSortBy}/>
      <Aside />
	  
    </div>
  );
}

function Menu({onSetDropdown}) {
  return (
    <div className="menu">
      <Dropdown  onSetDropdown={onSetDropdown} />
	  <img src="/Assets/shopping-cart.svg" alt="shopping_cart" />
      <span className="span-menu">3</span>
    </div>
  );
}

function Dropdown({onSetDropdown}){
	return (
		<div className="dropdown">
			<img src="/Assets/list.svg" alt="menu" />
			<ul className="dropdown-menu">
				{dropdownMenuItems.map((item, i) =>
					<li key={i} onClick={()=> onSetDropdown(item.value)}>{item.name}</li>
				)}
			</ul>
		</div>
	)
}

function Main({onSortBy, items, sortBy}) {

	let sortedItems;

	sortedItems = 
	sortBy === "highest" ? items.slice().sort((a,b)=> b.price - a.price) : 
	sortBy === "lowest" ? items.slice().sort((a,b)=> a.price - b.price) : 
	sortBy === "sold" ? items.slice().filter((it)=> it.instock) :
	items;

console.log(sortedItems);

  return <main>
	{items &&	
	<div className="filter">
		<label><img src="./Assets/filter.svg"/></label>
		{/* <p>Filter price by: </p> */}
		<select value={sortBy} onChange={(e)=> onSortBy(e.target.value)}>
			<option>No filter</option>
			<option value={"highest"}>By highest</option>
			<option value={"lowest"}>By lowest</option>
			<option value={"sold"}>In stock</option>
		</select>
	</div>}

	<div className="main">
	{!items && <p style={{color: "red", fontSize: "4rem"}}>Pick some item from menu</p>}
	 { sortedItems?.map((h,i)=> 
		<Item amount={h.amount} header={h.name} key={h.id} img={h.img} id={h.id} price={h.price}/>
	)}  
	</div>
  </main>;
}

function Item({amount,img, header, id, price }){
	return (
		<div className="item">
        	<h3>{header} {id}</h3> 
        	<img src={img} alt={header} />
			<h4>Enter amount:</h4>
			<div className="counterContainer">
				<Button >+</Button>
				<input type="text" onChange={(e)=> e.target.value} value={amount} id="1" name="counter"/>
				{/* <span>{amount}</span> */}
				<Button>-</Button>
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

