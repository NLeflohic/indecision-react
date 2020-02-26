import React from "react";

class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = e => {
    e.preventDefault();
    const option = e.target.elements.optionForm.value.trim();
    const error = this.props.handleAddOption(option);
    e.target.elements.optionForm.value = "";
    this.setState(() => ({ error }));
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="optionForm" />
          <button className="button">Add option</button>
        </form>
      </div>
    );
  }
}
export default AddOption;
