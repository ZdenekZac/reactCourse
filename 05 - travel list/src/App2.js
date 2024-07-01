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
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleClick(e) {
    setSelectedId(e !== selectedId ? e : null);
  }

  function handleReset() {
    setStep(0);
    setCount(0);
  }
  //////////////   APP  //////////////////
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    console.log(id);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Math.floor(Math.random() * 1001) };
    console.log(newItem);
    setDescription("");
    setQuantity(1);
    handleAddItems(newItem);
  }
  //////////////   APP   ////////////////

  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div className={q.id === selectedId ? "selected" : ""} key={q.id} onClick={() => handleClick(q.id)}>
          {q.id === selectedId ? q.answer : q.question}
        </div>
      ))}
      <div onClick={() => setCount(count - step)}>-</div>
      <div className="counter">
        <span>{step}</span>
        <input type="range" value={step} min={0} max={10} onChange={(e) => setStep(Number(e.target.value))} />
        <span>{count === 0 ? "today:" : count > 0 ? `in ${count} is` : `days ago: ${count}`}</span>
        <span>{date.toDateString()}</span>
        {count !== 0 || step !== 0 ? (
          <button className="reset" onClick={handleReset}>
            X
          </button>
        ) : null}
      </div>
      <div onClick={() => setCount(count + step)}>+</div>
      {/* //////////////// AAAAA PPPPPP ///////////////// 
	  //////////////// AAAAA PPPPPP ///////////////// 
	  //////////////// AAAAA PPPPPP ///////////////// */}
      <div>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
      </div>
      <div onClick={handleSubmit}>ADD</div>

      <PackingList items={items} onToggleItem={handleToggleItem} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="counter">
      {items.map((item) => (
        <Item onToggleItem={onToggleItem} onDeleteItem={onDeleteItem} item={item} key={item.id} />
      ))}
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <span>
      <input type="checkbox" value={item.checked} onChange={() => onToggleItem(item)} />
      {item.quantity} {item.description}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </span>
  );
}
