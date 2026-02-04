import { useEffect, useReducer } from "react";

import Main from "./Main";
import Header from "./Header";
import Loader from "./Loader";
import Progress from "./Progress";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Error from "./Error";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";





export default function App() {
  const [{ questions, status, index, answer, points, highscore, secondsRemaining }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              answer={answer}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
            />

            <Question question={questions[index]} dispatch={dispatch} answer={answer} />
            <Footer>
              <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
              <NextButton dispatch={dispatch} answer={answer} numQuestions={numQuestions} index={index} />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
