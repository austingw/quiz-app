import { useState, useEffect } from "react";
import Question from "./components/Question";
import Start from "./components/Start";
import testQuestions from "./testQuestions";

function App() {
  const [questions, setQuestions] = useState(getQuiz(testQuestions.results));

  function getQuiz(quizQuestions) {
    const newQuiz = [];
    quizQuestions.forEach((data) => newQuiz.push(generateAnswers(data)));
    return newQuiz;
  }

  function generateAnswers(data) {
    const answerKey = data.incorrect_answers.map((answer) => {
      return {
        answer: answer,
        isTrue: false,
        isSelected: false,
      };
    });
    answerKey.push({
      answer: data.correct_answer,
      isTrue: true,
      isSelected: false,
    });
    //shuffledAnswers randomizes the array order of each question's answers
    //so that there isn't a set pattern/order of correct answers for the quiz
    const shuffledAnswers = answerKey
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);

    return {
      question: data.question,
      answers: shuffledAnswers,
    };
  }

  useEffect(() => {
    /*console.log(
      `https://opentdb.com/api.php?amount=5&category=11&type=multiple`
    );*/
    console.log(questions);
  }, []);

  const questionElements = questions.map((question) => (
    <Question
      key={question.question}
      question={question.question}
      answer1={question.answers[0]}
      answer2={question.answers[1]}
      answer3={question.answers[2]}
      answer4={question.answers[3]}
    />
  ));

  return (
    <div className="App">
      {questionElements}

      {/*<Question
        key={questions[0].question}
        question={questions[0].question}
        answer1={answers[0]}
        answer2={answers[1]}
        answer3={answers[2]}
        answer4={answers[3]}
  />*/}
    </div>
  );
}

export default App;
