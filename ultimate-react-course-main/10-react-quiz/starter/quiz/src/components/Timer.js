import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
<<<<<<< HEAD

const { dispatch, secondsRemaining } = useQuiz();
=======
  const { dispatch, secondsRemaining } = useQuiz();
>>>>>>> 7448ab4183a2dbf2770392da61f8db26f98b80fe
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch],
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
