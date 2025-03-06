import "../styles.css";
import { useState } from "react";

// --------------------- 04 - STEPS, COUNTER, CARDS, ETC ------------

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question: "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function App2() {
  return (
    <div className="App">
      <FlashCards />
      <Divider />
      <TravelApp />
    </div>
  );
}

function FlashCards() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleClick(e) {
    setSelectedId(e !== selectedId ? e : null);
  }

  function handleReset() {
    setStep(0);
    setCount(0);
  }

  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div className={q.id === selectedId ? "selected" : ""} key={q.id} onClick={() => handleClick(q.id)}>
          {q.id === selectedId ? q.answer : q.question}
        </div>
      ))}
      <div onClick={() => setCount(count - step)}>-</div>
      <div className="counter">
        <input type="range" min={0} max={10} onChange={(e) => setStep(Number(e.target.value))} />
        <span>{step}</span>
        <span>
          {count === 0 ? `today is: ` : count > 0 ? `in ${count} days is: ` : `${Math.abs(count)} days ago was: `}
        </span>
        <span>{date.toDateString()}</span>
        {count !== 0 || step !== 0 ? <button onClick={handleReset}>reset</button> : null}
      </div>
      <div onClick={() => setCount(count + step)}>+</div>
    </div>
  );
}

function Divider() {
  return <div className="divider"></div>;
}

// --------- 05 - TRAVEL APP FAR AWAY ------------

function TravelApp() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="app">
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <ItemList />
    </div>
  );
}

function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Math.floor(Math.random() * 1000) + 1 };
    setDescription("");
    setQuantity(1);
    console.log(newItem);
    onAddItems(newItem);
  }
  return (
    <form onSubmit={handleSubmit} className="add-form">
      <select onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>add</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
    </li>
  );
}

function ItemList() {
  const [iteems, setItems] = useState([]);

  const addItem = () => {
    const newItem = `Item ${iteems.length}`;
    setItems((items) => [...items, newItem]);
    console.log(iteems);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {iteems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
