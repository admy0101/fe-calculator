import { useState } from "react";
const Buttons = (number) => {
  // const adding = (but) => {
  //   console.log(but.target.name);
  //   number += but.target.name;
  //   console.log(number);
  // };

  const [result, setCalc] = useState("");

  const updateCalc = (but) => {
    setCalc(result + but.target.name);
    console.log(result);
  };
  // const done = () => {
  //   setCalc(eval(result));
  // };
  return (
    <>
      <div className="header">
        <h1>{result || "0"}</h1>
      </div>
      <div className="container-buttons">
        <div className="component-buttons">
          <div>
            <button>AC</button>
          </div>
          <div>
            <button>+/-</button>
          </div>
          <div>
            <button name="%" onClick={updateCalc}>
              %
            </button>
          </div>
          <div>
            <button className="orange" name="/" onClick={updateCalc}>
              /
            </button>
          </div>
        </div>
        <div className="component-buttons">
          <div>
            <button name="7" onClick={updateCalc}>
              7
            </button>
          </div>
          <div>
            <button name="8" onClick={updateCalc}>
              8
            </button>
          </div>
          <div>
            <button name="9" onClick={updateCalc}>
              9
            </button>
          </div>
          <div>
            <button className="orange" name="*" onClick={updateCalc}>
              x
            </button>
          </div>
        </div>
        <div className="component-buttons">
          <div>
            <button name="4" onClick={updateCalc}>
              4
            </button>
          </div>
          <div>
            <button name="5" onClick={updateCalc}>
              5
            </button>
          </div>
          <div>
            <button name="6" onClick={updateCalc}>
              6
            </button>
          </div>
          <div>
            <button className="orange" name="-" onClick={updateCalc}>
              -
            </button>
          </div>
        </div>
        <div className="component-buttons">
          <div>
            <button name="1" onClick={updateCalc}>
              1
            </button>
          </div>
          <div>
            <button name="2" onClick={updateCalc}>
              2
            </button>
          </div>
          <div>
            <button name="3" onClick={updateCalc}>
              3
            </button>
          </div>
          <div>
            <button className="orange" name="+" onClick={updateCalc}>
              +
            </button>
          </div>
        </div>
        <div className="component-buttons">
          <div className="add">
            <button name="0" onClick={updateCalc}>
              0
            </button>
          </div>
          <div>
            <button name="." onClick={updateCalc}>
              .
            </button>
          </div>
          <div>
            <button className="orange">=</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buttons;
