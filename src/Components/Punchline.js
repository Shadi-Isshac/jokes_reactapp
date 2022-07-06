import React from "react";

export default function Punchline(props) {
  let punchLine;
  if (props.answer === true) {
    punchLine = props.Pineapples;  
  }else{
      punchLine = ""
  }

  return (
    <main>
      <section className="Punchline">
        <ul>{punchLine}</ul>
      </section>
    </main>
  );
}
