const Buttons = (number) => {
  const adding = (but) => {
    console.log(but.target.name);
    number += but.target.name;
    console.log(number);
  };
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
          <button name="%" onClick={adding}>
            %
          </button>
        </div>
        <div>
          <button className="orange" name="/" onClick={adding}>
            /
          </button>
        </div>
      </div>
      <div className="component-buttons">
        <div>
          <button name="7" onClick={adding}>
            7
          </button>
        </div>
        <div>
          <button name="8" onClick={adding}>
            8
          </button>
        </div>
        <div>
          <button name="9" onClick={adding}>
            9
          </button>
        </div>
        <div>
          <button className="orange" name="X" onClick={adding}>
            x
          </button>
        </div>
      </div>
      <div className="component-buttons">
        <div>
          <button name="4" onClick={adding}>
            4
          </button>
        </div>
        <div>
          <button name="5" onClick={adding}>
            5
          </button>
        </div>
        <div>
          <button name="6" onClick={adding}>
            6
          </button>
        </div>
        <div>
          <button className="orange" name="-" onClick={adding}>
            -
          </button>
        </div>
      </div>
      <div className="component-buttons">
        <div>
          <button name="1" onClick={adding}>
            1
          </button>
        </div>
        <div>
          <button name="2" onClick={adding}>
            2
          </button>
        </div>
        <div>
          <button name="3" onClick={adding}>
            3
          </button>
        </div>
        <div>
          <button className="orange" name="+" onClick={adding}>
            +
          </button>
        </div>
      </div>
      <div className="component-buttons">
        <div className="add">
          <button name="0" onClick={adding}>
            0
          </button>
        </div>
        <div>
          <button name="." onClick={adding}>
            .
          </button>
        </div>
        <div>
          <button className="orange">=</button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
