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
  return <main></main>;
}
function Aside() {
  return <aside>Aside</aside>;
}
