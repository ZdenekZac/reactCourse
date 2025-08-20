import "./App.css";

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
  return <main>
	<div className="item">
        <h3>Beanie 1</h3>
        <img src="/Assets/beanie.svg" alt="beanie" />
		<h4>Enter amount:</h4>
		<div className="counterContainer">
			<Button>+</Button>
			<input type="text" value={0} id="1" name="counter"/>
			<Button>-</Button>
		</div>
		<h4>Total Price:</h4>
		<h3>$ 34</h3>
		<Button>Add to Cart</Button>
	</div>

  </main>;
}
function Aside() {
  return <aside>Aside</aside>;
}

function Button({children}){
	return <button>{children}</button>
}
