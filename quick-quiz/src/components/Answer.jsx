export default function Answer(props) {
  const styles = {
    bakgroundColor: props.isSelected
      ? backgroundColor
      : props.isHeld
      ? "#59E391"
      : "white",
  };
  //

  return (
    <button className="answer-btn" style={styles} onClick={props.selectAnswer}>
      {props.answer}
    </button>
  );
}
