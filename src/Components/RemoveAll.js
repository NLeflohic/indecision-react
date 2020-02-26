import React from "react";

const RemoveAll = props => {
  return (
    <div>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>
  );
};

export default RemoveAll;
