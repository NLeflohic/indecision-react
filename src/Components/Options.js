import React from "react";
import Option from "./Option";
import RemoveAll from "./RemoveAll";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>
      <RemoveAll handleDeleteOptions={props.handleDeleteOptions} />
    </div>
    {!(props.optionsArray && props.optionsArray.length > 0) && (
      <p className="widget__message">Add an option to get started !!</p>
    )}
    {props.optionsArray.map((item, idx) => (
      <Option
        option={item}
        handleDeleteOption={props.handleDeleteOption}
        key={idx}
        index={idx}
      />
    ))}
  </div>
);

// props.optionsArray && props.optionsArray.length > 0 ? (
//   <div>
//     <div className="widget-header">
//       <h3 className="widget-header__title">Your options</h3>
//       <RemoveAll handleDeleteOptions={props.handleDeleteOptions} />
//     </div>
//     <p>Here are your options :</p>
//     {props.optionsArray.map((item, idx) => (
//       <Option
//         option={item}
//         handleDeleteOption={props.handleDeleteOption}
//         key={idx}
//         index={idx}
//       />
//     ))}
//   </div>
// ) : (
//   <p>Add an option to get started !!</p>
// );

export default Options;
