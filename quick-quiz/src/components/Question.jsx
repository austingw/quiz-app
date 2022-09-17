export default function Question(props) {
  return (
    <div className="question">
      <h3 className="question-title">{props.question}</h3>
      <div className="answers">
        <button className="answer-btn">{props.answer1}</button>
        <button className="answer-btn">{props.answer2}</button>
        <button className="answer-btn">{props.answer3}</button>
        <button className="answer-btn">{props.answer4}</button>
      </div>
    </div>
  );
}
