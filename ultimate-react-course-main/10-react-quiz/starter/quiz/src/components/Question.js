import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

function Question() {
  const { question, dispatch, answer } = useQuiz();
  return (
    <div>
        <h4>{question.question}</h4>
      <Options />
    </div>
  );
}

export default Question;
