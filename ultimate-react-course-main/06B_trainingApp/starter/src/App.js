import { useState } from "react";
import "./App.css";
import {dropdownMenuItems, hats, bicycles, glasses, shoes, hoodies, tshirts } from "./items.js";

export default function App() {
	const [sortBy, setSortBy] = useState("");
	const [items, setItems] = useState();
	const [asideItems, setAsideItems] = useState([]);

	let sortedItems;

	function handleAddItem(item, amt)
	{
		setAsideItems((itms) => [...itms, item]);
				setAsideItems((items) => items.map((it) => ({...it, amount: it.amount + amt}));	

	}

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
      <Main items={items} sortBy={sortBy} onAddItem={handleAddItem}
	  onSortBy={handleSetSortBy} sortedItems={sortedItems}/>
      <Aside asideItems={asideItems}/>
	  
    </div>
  );
}



function Main({onSortBy, items, sortBy, sortedItems, onAddItem}) {
	const [selected, setSelected] = useState("");

	function handleSetSelected(id){
		setSelected(id)
	}

	sortedItems = 
	sortBy === "highest" ? items.slice().sort((a,b)=> b.price - a.price) : 
	sortBy === "lowest" ? items.slice().sort((a,b)=> a.price - b.price) : 
	sortBy === "sold" ? items.slice().filter((it)=> it.instock) :
	items;

  return <main>
	{items &&	
	<div className="filter">
		<label><img src="./Assets/filter.svg"/></label>
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
		<Item onSelected={handleSetSelected} onAddItem={onAddItem}
				selected={selected} header={h.name} key={h.id} img={h.img} 
				id={h.id} price={h.price} h={h} />
	)}  
	</div>
  </main>;
}

function Item({img, header, id, price, onSelected, selected, onAddItem, h}){
		const [amt, setAmt] = useState(0);
	return (
		<div value={id} className={`item ${selected === id ? "selected" : ""}`} onClick={()=> onSelected(id)
		}>
        	<h3>{header} {id}</h3> 
        	<img src={img} alt={header} />
			<h4>Enter amount:</h4>
			<div className="counterContainer">
				<Button onClick={()=> setAmt(Number(amt + 1))}>+</Button>
				<input type="text" onChange={(e)=> e.target.value} value={amt}/>
				<Button onClick={()=> setAmt(Number(amt > 0 ? amt - 1 : amt))}>-</Button>
		</div>
		<h4>Price:</h4>
		<h3>$ {price}</h3>
		<Button onClick={()=> onAddItem(h, amt)}>Add to Cart</Button>
	</div>
	)
}
function Aside({asideItems}) {
  return <ul className="aside">
	{asideItems?.map(item => 
		<li key={item.id}>
			<div>
			<p>{item.name} {item.id}</p>
			<p>{item.price}</p>
			<p>{item.name}</p>

			</div>
		</li>
	)}
	<p>Total price: </p>
	  </ul>
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

function Button({children, onClick}){
	return <button onClick={onClick}>{children}</button>
}

