import { useQuiz } from "../contexts/QuizContext";

<<<<<<< HEAD
function StartScreen(){
  const {numQuestions, dispatch} = useQuiz();
	return (
		<div className="start">
			<h2>Welcome to the React Quiz!</h2>
			<h3>{numQuestions} questions to test your React mastery</h3>
			<button className="btn btn-ui" onClick={()=>dispatch({type: "start"})}>Let's start</button>
		</div>
	)
=======
function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "start" })}>
        Let's start
      </button>
    </div>
  );
>>>>>>> 7448ab4183a2dbf2770392da61f8db26f98b80fe
}

export default StartScreen;
