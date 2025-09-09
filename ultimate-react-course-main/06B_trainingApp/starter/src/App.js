import { useState } from "react";
import "./App.css";
import { dropdownMenuItems, hats, bicycles, glasses, shoes, hoodies, tshirts } from "./items.js";

export default function App() {
  const [sortBy, setSortBy] = useState("");
  const [items, setItems] = useState();
  const [selected, setSelected] = useState("");
  const [asideItems, setAsideItems] = useState([]);
  let sortedItems;

  function handleAddItem(item, amt) {
    const itm = { ...item, amount: +amt };
    setAsideItems((items) => [...items, itm]);
    console.log(itm);
  }

  function handleSetSelected(id) {
    setSelected(id);
  }

  function handleSetDropdown(val) {
    setItems(
      val === "hats"
        ? hats
        : val === "bicy"
        ? bicycles
        : val === "shoes"
        ? shoes
        : val === "glasses"
        ? glasses
        : val === "hoodies"
        ? hoodies
        : val === "tshirts"
        ? tshirts
        : []
    );
    handleSetSortBy("-");
  }

  function handleSetSortBy(val) {
    setSortBy(val);
  }

  return (
    <div className="app">
      <Menu onSetDropdown={handleSetDropdown} />
      <Main
        items={items}
        selected={selected}
        sortBy={sortBy}
        onSortBy={handleSetSortBy}
        onSelected={handleSetSelected}
        onAddItem={handleAddItem}
        sortedItems={sortedItems}
      />
      <Aside asideItems={asideItems} />
    </div>
  );
}

function Main({ onSortBy, items, sortBy, sortedItems, onSelected, selected, onAddItem }) {
  sortedItems =
    sortBy === "highest"
      ? items.slice().sort((a, b) => b.price - a.price)
      : sortBy === "lowest"
      ? items.slice().sort((a, b) => a.price - b.price)
      : sortBy === "sold"
      ? items.slice().filter((it) => it.instock)
      : items;

  return (
    <main>
      {items && (
        <div className="filter">
          <label>
            <img src="./Assets/filter.svg" alt="picture_of_filters" />
          </label>
          <select value={sortBy} onChange={(e) => onSortBy(e.target.value)}>
            <option>No filter</option>
            <option value={"highest"}>By highest</option>
            <option value={"lowest"}>By lowest</option>
            <option value={"sold"}>In stock</option>
          </select>
        </div>
      )}

      <div className="main">
        {!items && <p style={{ color: "red", fontSize: "4rem" }}>Pick some item from menu</p>}
        {sortedItems?.map((h, i) => (
          <Item
            onSelected={onSelected}
            onAddItem={onAddItem}
            selected={selected}
            header={h.name}
            key={h.id}
            img={h.img}
            id={h.id}
            price={h.price}
            h={h}
          />
        ))}
      </div>
    </main>
  );
}

function Item({ img, header, id, price, onSelected, selected, onAddItem, h }) {
  const [amt, setAmt] = useState(1);
  return (
    <div className={`item ${selected === h.id ? "selected" : ""}`} onClick={() => onSelected(id)}>
      <h3>
        {header} {id}
      </h3>
      <img src={img} alt={header} />
      <h4>Enter amount:</h4>
      <div className="counterContainer">
        <Button onClick={() => setAmt(Number(amt + 1))}>+</Button>
        <input type="text" onChange={(e) => e.target.value} value={amt >= 0 ? amt : 0} />
        <Button onClick={() => setAmt(Number(amt - 1))}>-</Button>
      </div>
      <h4>Price:</h4>
      <h3>$ {price}</h3>
      <Button onClick={() => onAddItem(h, amt)}>Add to Cart</Button>
    </div>
  );
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

function Menu({ onSetDropdown }) {
  return (
    <div className="menu">
      <Dropdown onSetDropdown={onSetDropdown} />
      <img src="/Assets/shopping-cart.svg" alt="shopping_cart" />
      <span className="span-menu">3</span>
    </div>
  );
}

function Dropdown({ onSetDropdown }) {
  return (
    <div className="dropdown">
      <img src="/Assets/list.svg" alt="menu" />
      <ul className="dropdown-menu">
        {dropdownMenuItems.map((item, i) => (
          <li key={i} onClick={() => onSetDropdown(item.value)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AsideItem({ it }) {
  return (
    <li className="aside_item">
      <h3>
        {it.name} {it.id}
      </h3>
      <img src={it.img} alt={it.name} />
      <p>Item price:</p>
      <span>$ {it.price}</span>
      <p>Amount:</p>
      <span>{it.amount}</span>
    </li>
  );
}

function Aside({ asideItems }) {
  return (
    <ul className="aside">
      {asideItems?.map((it) => (
        <AsideItem it={it} key={it.id} />
      ))}
      <h2>Total price: ${}</h2>
    </ul>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
