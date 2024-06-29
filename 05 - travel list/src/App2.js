import "./styles.css";
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
      {/*
      <TravelApp /> */}
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState();
  const [size, setSize] = useState("50px");
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(5);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleClick(i) {
    setSelectedId(selectedId !== i ? i : null);
  }

  function handleReset() {
    setStep(0);
    setCount(0);
    setItems([]);
    setQuantity(5);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Math.floor(Math.random() * 1000) };
    handleAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div key={q.id} className={q.id === selectedId ? "selected" : ""} onClick={() => handleClick(q.id)}>
          {q.id === selectedId ? q.answer : q.question}
        </div>
      ))}
      <div style={{ fontSize: size }} onClick={() => setCount(count - step)}>
        -
      </div>
      <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
        {count !== 0 || step !== 0 ? (
          <span style={{ fontSize: size }} className="reset" onClick={handleReset}>
            ❌
          </span>
        ) : null}
        <span>{step}</span>
        <input type="range" min={0} max={10} value={step} onChange={(e) => setStep(Number(e.target.value))} />
        <span>{count === 0 ? "today is: " : count > 0 ? `in ${count} days is ` : `${count} days ago was`}</span>
        <span>{date.toDateString()}</span>
      </div>
      <div style={{ fontSize: size }} onClick={() => setCount(count + step)}>
        +
      </div>
      {/* //////////// FORM TRAVEL LIST ////////// */}
      <div key={"divSelect"} style={{ display: "flex", flexDirection: "column" }}>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div key={"packingList"}>
        <PackingList items={items} />
      </div>
      <div key={"btn"}>
        <button onClick={handleSubmit}>add</button>
      </div>
    </div>
  );
}

function PackingList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
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
