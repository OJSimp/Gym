import "./NumberInput.scss";

import { useState } from "react";

const NumberInput = (props) => {
  // change to text input
  const [inputValue, setInputValue] = useState("");

  // return the value of the input
  const handleInputValue = (e) => {
    props.setInputValue(e.target.value);
    return inputValue;
  };

  return (
    <div className="input-number">
      <input
        className="input__number"
        placeholder=" "
        type="number"
        id={props.id}
        onChange={handleInputValue}
        autoComplete="off"
      />
      <label className="number-input__label" htmlFor={props.id}>
        {props.label}
      </label>
      <span className="number-input__error-message">{props.error}</span>
    </div>
  );
};

export default NumberInput;
