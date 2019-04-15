import React from "react";

function Input(props) {
  return (
    <div role="presentation" className="input-component">
      <div role="presentation" className="input-field">
        <label htmlFor={props.id}>{props.label}</label>
        <input
          id={props.id}
          type={props.type}
          value={props.inputValue}
          onChange={props.onChange}
          onBlur={props.onBlur}
          aria-invalid={props.ariaInvalid}
          aria-controls="errMsg"
          aria-describedby="errMsg"
        />
      </div>
      <div
        className="error-message"
        id="errMsg"
        aria-live="assertive"
        aria-atomic="true"
      >
        {props.isError}
      </div>
    </div>
  );
}
export default Input;
