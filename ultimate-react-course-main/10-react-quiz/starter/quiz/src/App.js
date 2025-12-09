import Main from "./Main.js";
import { useEffect, useReducer } from "react";
import Header from "./Header.js";
import DateCounter from "./DateCounter.js";

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("action unknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div>
      {/* <DateCounter /> */}
      <Header />
      <Main>
        <DateCounter />
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
