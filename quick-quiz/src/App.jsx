import { useState, useEffect } from "react";
import Question from "./components/Question";
import Start from "./components/Start";
import testQuestions from "./testQuestions";

function App() {
  const [questions, setQuestions] = useState(testQuestions.results);
  const [answers, setAnswers] = useState(generateAnswers());

  function generateAnswers() {
    const answerKey = questions[0].incorrect_answers.map((answer) => {
      return {
        answer: answer,
        isTrue: false,
      };
    });
    answerKey.push({
      answer: questions[0].correct_answer,
      isTrue: true,
    });
    //This ranomizes the array order of answers so that there isn't a pattern
    const shuffledAnswers = answerKey
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);

    return shuffledAnswers;
  }

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
        answer1={answers[0]}
        answer2={answers[1]}
        answer3={answers[2]}
        answer4={answers[3]}
      />
    </div>
  );
}

export default App;
