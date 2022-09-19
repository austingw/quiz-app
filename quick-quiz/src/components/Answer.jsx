export default function Answer(props) {
  const styles = {
    backgroundColor: props.isSelected ? "black" : "grey",
  };
  //

  return (
    <button className="answer-btn" style={styles} onClick={props.selectAnswer}>
      {props.answer}
    </button>
  );
}
