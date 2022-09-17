import { useState, useEffect } from "react";
import Question from "./components/Question";
import Start from "./components/Start";
import testQuestions from "./testQuestions";

function App() {
  const [questions, setQuestions] = useState(testQuestions.results);

  useEffect(() => {
    console.log(
      `https://opentdb.com/api.php?amount=5&category=11&type=multiple`
    );
  }, []);

  return (
    <div className="App">
      <Question
        key={questions[0].question}
        question={questions[0].question}
        answer1={questions[0].correct_answer}
        answer2={questions[0].incorrect_answers[0]}
        answer3={questions[0].incorrect_answers[0]}
        answer4={questions[0].incorrect_answers[0]}
      />
    </div>
  );
}

export default App;
