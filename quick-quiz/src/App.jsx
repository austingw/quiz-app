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

    return [
      data.question,
      shuffledAnswers[0],
      shuffledAnswers[1],
      shuffledAnswers[2],
      shuffledAnswers[3],
    ];
  }

  function selectAnswer(set, question, choice) {
    console.log(choice);

    setQuestions((oldQuestions) =>
      oldQuestions.map((pair) => {
        if (pair === set) {
          return pair.map((item) => {
            if (item === question) {
              return item;
            } else if (item.answer === choice) {
              return { ...item, isSelected: !item.isSelected };
            } else {
              return { ...item, isSelected: false };
            }
          });
        } else {
          return pair;
        }
      })
    );
  }

  useEffect(() => {
    /*console.log(
      `https://opentdb.com/api.php?amount=5&category=11&type=multiple`
    );*/
    console.log(questions);
  }, [questions]);

  const questionElements = questions.map((pair) => (
    <div key={pair[0]} className="question">
      <Question question={pair[0]} />
      <div className="answers">
        <Answer
          answer={pair[1].answer}
          isSelected={pair[1].isSelected}
          selectAnswer={() => selectAnswer(pair, pair[0], pair[1].answer)}
        />
        <Answer
          answer={pair[2].answer}
          isSelected={pair[2].isSelected}
          selectAnswer={() => selectAnswer(pair, pair[0], pair[2].answer)}
        />
        <Answer
          answer={pair[3].answer}
          isSelected={pair[3].isSelected}
          selectAnswer={() => selectAnswer(pair, pair[0], pair[3].answer)}
        />
        <Answer
          answer={pair[4].answer}
          isSelected={pair[4].isSelected}
          selectAnswer={() => selectAnswer(pair, pair[0], pair[4].answer)}
        />
      </div>
    </div>
  ));

  return <div className="App">{questionElements}</div>;
}

export default App;
