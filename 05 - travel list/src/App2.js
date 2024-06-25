// import "./styles.css";
// import { useState } from "react";

// --------------------- 04 - STEPS, COUNTER, CARDS, ETC ------------

// export default function App() {
//   return (
//     <div className="App">
//       <FlashCards />
//     </div>
//   );
// }

// const questions = [
//   {
//     id: 3457,
//     question: "What language is React based on?",
//     answer: "JavaScript",
//   },
//   {
//     id: 7336,
//     question: "What are the building blocks of React apps?",
//     answer: "Components",
//   },
//   {
//     id: 8832,
//     question: "What's the name of the syntax we use to describe a UI in React?",
//     answer: "JSX",
//   },
//   {
//     id: 1297,
//     question: "How to pass data from parent to child components?",
//     answer: "Props",
//   },
//   {
//     id: 9103,
//     question: "How to give components memory?",
//     answer: "useState hook",
//   },
//   {
//     id: 2002,
//     question: "What do we call an input element that is completely synchronised with state?",
//     answer: "Controlled element",
//   },
// ];

// function FlashCards() {
//   const [step, setStep] = useState(0);
//   const [count, setCount] = useState(0);
//   const [selectedId, setSelectedId] = useState(null);
//   const date = new Date();
//   date.setDate(date.getDate() + count);

//   function handleClick(e) {
//     setSelectedId(e !== selectedId ? e : null);
//   }

//   function handleReset() {
//     setStep(0);
//     setCount(0);
//   }

//   return (
//     <div className="flashcards">
//       {questions.map((q) => (
//         <div className={q.id === selectedId ? "selected" : ""} key={q.id} onClick={() => handleClick(q.id)}>
//           {q.id === selectedId ? q.answer : q.question}
//         </div>
//       ))}
//       <div onClick={() => setCount(count - step)}>-</div>
//       <div className="counter">
//         <input type="range" min={0} max={10} onChange={(e) => setStep(Number(e.target.value))} />
//         <span>{step}</span>
//         <span>
//           {count === 0 ? `today is: ` : count > 0 ? `in ${count} days is: ` : `${Math.abs(count)} days ago was: `}
//         </span>
//         <span>{date.toDateString()}</span>
//         {count !== 0 || step !== 0 ? <button onClick={handleReset}>reset</button> : null}
//       </div>
//       <div onClick={() => setCount(count + step)}>+</div>
//     </div>
//   );
// }

// --------------------- 05 - TRAVEL APP FAR AWAY ------------

// import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "passport", quantity: 2, packed: false },
//   { id: 2, description: "socks", quantity: 12, packed: false },
//   { id: 3, description: "charger", quantity: 1, packed: true },
// ];

// export default function App() {
//   const [items, setItems] = useState([]);

//   function handleAddItems(item) {
//     setItems((items) => [...items, item]);
//   }

//   return (
//     <div className="app">
//       <Logo />
//       <Form onAddItems={handleAddItems} />
//       <PackingList items={items} />
//       <Stats />
//     </div>
//   );
// }

// function Logo() {
//   return <h1>🌴 Far Away 🎒</h1>;
// }

// function Form({ onAddItems }) {
//   const [description, setDescription] = useState("test");
//   const [quantity, setQuantity] = useState(5);

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!description) return;

//     const newItem = { description, quantity, packed: false, id: Date.now() };
//     console.log(newItem);

//     onAddItems(newItem);

//     setDescription("");
//     setQuantity(1);
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>What do you need for your trip? 🔍</h3>
//       <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option value={num} key={num}>
//             {num}
//           </option>
//         ))}
//       </select>
//       <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)} />
//       <button>Add</button>
//     </form>
//   );
// }

// function PackingList({ items }) {
//   return (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <Item item={item} key={item.id} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Item({ item }) {
//   return (
//     <li>
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity} {item.description}
//       </span>
//       <button>❌</button>
//     </li>
//   );
// }

// function Stats() {
//   return (
//     <footer className="stats">
//       <em>🎒 You have X items on your list, and you already packed X (X%)</em>
//     </footer>
//   );
// }
