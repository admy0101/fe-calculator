//import { useState } from "react";
console.log("what's up?");
const Buttons = () => {
  const adding = () => {
    console.log("hello");
  };

  //const [button, setButton] = useState(0)

  return (
    <div className="container-buttons">
      <div className="component-buttons">
        <div>
          <button>AC</button>
        </div>
        <div>
          <button>+/-</button>
        </div>
        <div>
          <button>%</button>
        </div>
        <div>
          <button className="orange">/</button>
        </div>
      </div>
      <div className="component-buttons">
        <div>
          <button onClick={adding}>7</button>
        </div>
        <div>
          <button>8</button>
        </div>
        <div>
          <button>9</button>
        </div>
        <div>
          <button className="orange">x</button>
        </div>
      </div>
      <div className="component-buttons">
        <div>
          <button>4</button>
        </div>
        <div>
          <button>5</button>
        </div>
        <div>
          <button>7</button>
        </div>
        <div>
          <button className="orange">-</button>
        </div>
      </div>
      <div className="component-buttons">
        <div>
          <button>1</button>
        </div>
        <div>
          <button>2</button>
        </div>
        <div>
          <button>3</button>
        </div>
        <div>
          <button className="orange">+</button>
        </div>
      </div>
      <div className="component-buttons">
        <div className="add">
          <button>0</button>
        </div>
        <div>
          <button>.</button>
        </div>
        <div>
          <button className="orange">=</button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
