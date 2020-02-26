import React from "react";

export default Option = props => {
  return (
    <div>
      <div className="option">
        <span className="option__text">
          {props.index + 1}. {props.option}
        </span>
        <button
          className="button button--link"
          onClick={() => props.handleDeleteOption(props.option)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
