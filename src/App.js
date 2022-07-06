import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Greet from "./Components/Greet";
import { Save } from "./Components/Save";
import Jokes from "./Components/Jokes";
import Punchline from "./Components/Punchline";
const axios = require("axios");

function App() {
  const [joke, setJoke] = useState("");
  const [punchLine, setPunchLine] = useState("");
  const [answer, setAnswer] = useState(false);

  function showAnswer() {
    setAnswer(!answer);
  }

  function getJoke() {
    setAnswer(false);
    const options = {
      method: "GET",
      url: "https://dad-jokes.p.rapidapi.com/random/joke",
      headers: {
        "X-RapidAPI-Key": "ed3ad10bdfmshdf68517db805899p19a377jsn7bf39a4eb6fe",
        "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        const Data = response.data.body[0];
        setJoke(Data.setup);
        setPunchLine(Data.punchline);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className="App">
      <Greet />
      <button onClick={getJoke}>I'm ready to laugh!</button>
      <Save />
      <Jokes Joke={joke} />
      <button onClick={showAnswer}>Answer</button>
      <Punchline Pineapples={punchLine} answer={answer} />
    </div>
  );
}

export default App;
