import { useState } from "react";
import "./App.css";
import { dropdownMenuItems, hats, bicycles, glasses, shoes, hoodies, tshirts } from "./items.js";

export default function App() {
  const [sortBy, setSortBy] = useState("");
  const [items, setItems] = useState();
  const [selected, setSelected] = useState("");
  const [asideItems, setAsideItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  let sortedItems;

  function handleAddItem(item, amt) {
    let itm;
    let findSameId = asideItems.find((it) => it.id === item.id);
    if (findSameId === undefined) {
      itm = { ...item, amount: +amt };
      setAsideItems((items) => [...items, itm]);
    } else {
      const idx = asideItems.findIndex((it) => it.id === item.id);
      asideItems[idx] = { ...asideItems[idx], amount: asideItems[idx].amount + amt };
      setAsideItems([...asideItems]);
    }
    console.log(asideItems);
  }

  function handleDeleteItem(id) {
    setAsideItems((items) => items.filter((item) => item.id !== id));
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
      <Aside asideItems={asideItems} onDeleteItem={handleDeleteItem} />
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
      <Button
        onClick={() => {
          onAddItem(h, amt);
          setAmt(1);
        }}>
        Add to Cart
      </Button>
    </div>
  );
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

function Aside({ asideItems, onDeleteItem }) {
  const totalPrice = asideItems?.reduce((acc, cur) => acc + cur.amount * cur.price, 0);

  return (
    <div className="aside">
      <h2>Your order: </h2>
      <ul className="listOfOrderItems">
        {asideItems?.map((it) => (
          <li className="aside_item" key={it.id}>
            <Button className="close" onClick={() => onDeleteItem(it.id)}>
              <img className="btn_close" src="./Assets/trash.svg" alt="trash" />
            </Button>
            <h3>
              {it.name} {it.id}
            </h3>
            <img src={it.img} alt={it.name} />
            <p>Item price:</p>
            <span>$ {it.price}</span>
            <p>Amount:</p>
            <span>{it.amount}</span>
          </li>
        ))}
      </ul>
      <h2>Total price: ${totalPrice}</h2>
    </div>
  );
}

function Button({ children, onClick, className = "" }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
