import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    optionsArray: [],
    selectedOption: undefined
  };

  // constructor(props) {
  //   super(props);
  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //   this.handlePick = this.handlePick.bind(this);
  //   this.handleAddOptions = this.handleAddOptions.bind(this);
  //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
  // this.state = {
  //   optionsArray: []
  // };
  // }
  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ optionsArray: [] }));
  };
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      optionsArray: prevState.optionsArray.filter(
        option => optionToRemove !== option
      )
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(
      Math.random() * this.state.optionsArray.length
    );
    const option = this.state.optionsArray[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleAddOptions = option => {
    if (!option) {
      return "Enter valid value to add";
    } else if (this.state.optionsArray.indexOf(option) > -1) {
      return "This option already exist";
    }

    this.setState(prevState => ({
      optionsArray: prevState.optionsArray.concat(option)
    }));
  };

  componentDidMount() {
    const options = localStorage.getItem("optionsArray");
    if (options) {
      this.setState(() => ({ optionsArray: JSON.parse(options) }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.optionsArray.length !== prevState.optionsArray.length) {
      localStorage.setItem(
        "optionsArray",
        JSON.stringify(this.state.optionsArray)
      );
    }
  }

  componentWillUnmount() {
    console.log("Component unmount!");
  }

  render() {
    return (
      <div>
        <Header subtitle="Put your life in the hand of a computer" />
        <div className="container">
          <Action
            hasOptions={this.state.optionsArray.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              optionsArray={this.state.optionsArray}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOptions} />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleCloseModal={this.handleCloseModal}
          />
        </div>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  optionsArray: []
};

export default IndecisionApp;
