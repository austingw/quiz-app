export default function Question(props) {
  return (
    <div className="question">
      <h3 className="question-title">{props.question}</h3>
      <div className="answers">
        <button className="answer-btn">{props.answer1.answer}</button>
        <button className="answer-btn">{props.answer2.answer}</button>
        <button className="answer-btn">{props.answer3.answer}</button>
        <button className="answer-btn">{props.answer4.answer}</button>
      </div>
    </div>
  );
}
