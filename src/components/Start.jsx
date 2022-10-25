export default function Start(props) {
  return (
    <div className="start-screen">
      <h1>Kitchen Sink Quiz</h1>
      <h3>
        5 completely random questions of varying difficulty pulled from the{" "}
        <a href="https://opentdb.com/">Open Trivia Database</a>
      </h3>
      <button className="game-btn" onClick={props.handleClick}>
        Start Quiz
      </button>
    </div>
  );
}
