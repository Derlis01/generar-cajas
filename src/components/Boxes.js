import React, { useReducer } from "react";
import "./boxes.css";

const initialState = { boxes: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        boxes: [...state.boxes, action.payload],
      };

    default:
  }
};

function Boxes() {
  const [state, dispatch] = useReducer(reducer, initialState);

  let aggBox = (e) => {
    e.preventDefault();
    let inputValue = e.target.elements.colors.value;
    let heightValue = e.target.elements.size.value
    dispatch({type: 'add', payload: {inputValue, heightValue}});
    e.target.reset();
  };

  return (
    <div>
      <div className="aggData">
        <p>Color</p>

        <form onSubmit={aggBox}>
            <label></label>
            <input placeholder="Options: rojo, azul, lila" name='colors'></input>
            <input placeholder="Altura en px" name='size' type='number'></input>
            <input formTarget='colors' type={'submit'}></input>
        </form>

      </div>
      <div className="boxes">
        {state.boxes.map((d, i) => (
          <div key={i} className={state.boxes[i].inputValue} style={{height: state.boxes[i].heightValue + 'px', width: state.boxes[i].heightValue + 'px'}}> {console.log(state)} Mensaje {i} </div>
        ))}
      </div>
    </div>
  );
}

export default Boxes;
