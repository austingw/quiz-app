import { useState, useEffect } from "react";
import Question from "./components/Question";
import Start from "./components/Start";

function App() {
  useEffect(() => {
    console.log(
      `https://opentdb.com/api.php?amount=5&category=11&type=multiple`
    );
  }, []);

  return <div className="App"></div>;
}

export default App;
