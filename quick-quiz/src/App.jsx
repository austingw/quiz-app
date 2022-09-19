import { useState, useEffect } from "react";
import Question from "./components/Question";
import Start from "./components/Start";
import testQuestions from "./testQuestions";
import Answer from "./components/Answer";

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

  function selectAnswer(choice) {
    console.log(choice);
  }

  useEffect(() => {
    /*console.log(
      `https://opentdb.com/api.php?amount=5&category=11&type=multiple`
    );*/
    console.log(questions);
  }, [questions]);

  const questionElements = questions.map((pair) => (
    <div key={pair.question} className="question">
      <Question question={pair.question} />
      <div className="answers">
        <Answer
          answer={pair.answers[0].answer}
          isSelected={pair.answers[0].isSelected}
          selectAnswer={() => selectAnswer(pair.answers[0])}
        />
        <Answer
          answer={pair.answers[1].answer}
          isSelected={pair.answers[1].isSelected}
          selectAnswer={() => selectAnswer(pair.answers[1])}
        />
        <Answer
          answer={pair.answers[2].answer}
          isSelected={pair.answers[2].isSelected}
          selectAnswer={() => selectAnswer(pair.answers[2])}
        />
        <Answer
          answer={pair.answers[3].answer}
          isSelected={pair.answers[3].isSelected}
          selectAnswer={() => selectAnswer(pair.answers[3])}
        />
      </div>
    </div>
  ));

  return <div className="App">{questionElements}</div>;
}

export default App;
