import Header from "./component/Header";
import Buttons from "./component/Buttons";
import { useState } from "react";
import React from "react";

function App() {
  const [number, setNumber] = React.useState(0);
  // const somethingElse = () => {
  //   setNumber((number) => {
  //     number++;
  //   });
  // };

  return (
    <div className="App">
      {/* {Header(number)} */}
      {Buttons(number)}
    </div>
  );
}

export default App;
