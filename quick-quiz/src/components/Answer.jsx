export default function Answer(props) {
  const styles = {
    backgroundColor: props.isSelected ? "#D6DBF5" : "#f5f7fb",

    textDecoration: props.results
      ? props.isTrue
        ? "underline"
        : "line-through"
      : "none",
  };

  return (
    <button className="answer-btn" style={styles} onClick={props.selectAnswer}>
      {props.answer}
    </button>
  );
}
