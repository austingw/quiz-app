export default function Answer(props) {
  const styles = {
    backgroundColor: props.isSelected ? "#59E391" : "black",
  };
  //

  return (
    <button className="answer-btn" style={styles} onClick={props.selectAnswer}>
      {props.answer}
    </button>
  );
}
