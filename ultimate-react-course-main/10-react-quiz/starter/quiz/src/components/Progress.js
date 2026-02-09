import { useQuiz } from "../contexts/QuizContext";

<<<<<<< HEAD

=======
>>>>>>> 7448ab4183a2dbf2770392da61f8db26f98b80fe
function Progress() {
  const { index, numQuestions, answer, points, maxPossiblePoints } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points} </strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
}
export default Progress;
