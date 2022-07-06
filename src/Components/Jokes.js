import React from "react";

export default function Jokes(props) {
   console.log(props);

    
    return (
       
       
       <main>
        <section className= "Joke">
        <ul>
            {props.Joke}
        </ul>
        </section>
        </main>
    );
}