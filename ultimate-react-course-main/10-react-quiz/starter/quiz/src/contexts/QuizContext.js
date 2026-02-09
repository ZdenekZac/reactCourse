import { createContext, useEffect, useContext, useReducer } from "react";

const SECS_PER_QUESTION = 30;

const QuizContext = createContext();

const initialState = {
  questions: [],
  //loading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
    switch (action.type) {

      case "loading":
        return {
          ...state,
          status: "loading",
        }

    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
      case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore: state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        highscore: state.highscore,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
        highscore: state.secondsRemaining === 0 ? Math.max(state.points, state.highscore) : state.highscore,
      };
    default:
      throw new Error("action unknown");
  }
}


function QuizProvider({ children }){
    const [{ questions, status, index, answer, points, highscore, secondsRemaining }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);
  const question = questions[index];
  
  
  // useEffect(function () {
  //   fetch("http://localhost:9000/questions")
  //   .then((res) => res.json())
  //   .then((data) => dispatch({ type: "dataReceived", payload: data }))
  //   .catch((err) => dispatch({ type: "dataFailed" }));
  // }, []);


  useEffect(function(){
    async function fetchQuestions(){
      dispatch({type: "loading"});
      try {
        const res = await fetch("http://localhost:9000/questions");
        const data = await res.json();
        dispatch({type: "dataReceived", payload: data});
      } catch {
        dispatch({type:"dataFailed"})
      }
    }
    fetchQuestions();
  },[])

  return (
    <QuizContext.Provider
      value={{
         question, 
         status, 
         index, 
         answer, 
         points, 
         highscore, 
         secondsRemaining,
         numQuestions,
         maxPossiblePoints,
         dispatch
      }}>
          {children}
    </QuizContext.Provider>
  );
}

function useQuiz(){
  const context = useContext(QuizContext);
  if (context === undefined) throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export {QuizProvider, useQuiz}