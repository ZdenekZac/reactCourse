import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
<<<<<<< HEAD

  const { dispatch, answer, index, numQuestions } = useQuiz();
  
=======
  const { dispatch, answer, index, numQuestions } = useQuiz();
>>>>>>> 7448ab4183a2dbf2770392da61f8db26f98b80fe
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: "nextQuestion" })}>
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </button>
    );
}
export default NextButton;
