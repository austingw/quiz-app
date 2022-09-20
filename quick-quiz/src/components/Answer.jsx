export default function Answer(props) {
  const styles = {
    backgroundColor: props.isSelected ? "navy" : "grey",

    color: props.results
      ? props.isSelected && props.isTrue
        ? "lightgreen"
        : "pink"
      : "white",

    textDecoration: props.results
      ? props.isSelected && props.isTrue
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
