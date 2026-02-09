import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

function Question() {
<<<<<<< HEAD
  const { question } = useQuiz();
  
=======
  const { question, dispatch, answer } = useQuiz();
>>>>>>> 7448ab4183a2dbf2770392da61f8db26f98b80fe
  return (
    <div>
        <h4>{question.question}</h4>
      <Options />
    </div>
  );
}

export default Question;
