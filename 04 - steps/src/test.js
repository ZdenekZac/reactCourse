import { useState } from "react";

// const messages = ["Learn React ⚛️ ", "Apply for jobs 💼 ", "Invest your new income 🤑 "];

export default function App2() {
  return (
    <div className="appDiv">
      {/* <Steps />
      <Steps /> */}
      <Counter />
    </div>
  );
}

//			___________________
// 			CODING CHALLENGE #3
// 			¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨

function Counter() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="appDiv">
      {/* STEPS */}
      <div className="count-div">
        <button className="btnStep" onClick={() => setSteps(steps - 1)}>
          -
        </button>
        <p> steps: {steps} </p>
        <button className="btnStep" onClick={() => setSteps(steps + 1)}>
          +
        </button>
      </div>
      {/* COUNT */}
      <div className="count-div">
        <button className="btnStep" onClick={() => setCount(count - steps)}>
          -
        </button>
        <p> count: {count}</p>
        <button className="btnStep" onClick={() => setCount(count + steps)}>
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0 ? "today is: " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}
          {date.toDateString()}
        </span>
      </p>
    </div>
  );
}
