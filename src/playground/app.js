class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      optionsArray: []
    };
  }
  handleDeleteOptions() {
    this.setState(() => ({ optionsArray: [] }));
  }
  handleDeleteOption(optionToRemove) {
    console.log(optionToRemove);
    this.setState(prevState => ({
      optionsArray: prevState.optionsArray.filter(
        option => optionToRemove !== option
      )
    }));
  }
  handlePick() {
    const randomNum = Math.floor(
      Math.random() * this.state.optionsArray.length
    );
    const option = this.state.optionsArray[randomNum];
    console.log("option", option);
  }

  handleAddOptions(option) {
    console.log(option);
    if (!option) {
      return "Enter valid value to add";
    } else if (this.state.optionsArray.indexOf(option) > -1) {
      return "This option already exist";
    }

    this.setState(prevState => ({
      optionsArray: prevState.optionsArray.concat(option)
    }));
  }

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
        <Action
          hasOptions={this.state.optionsArray.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          optionsArray={this.state.optionsArray}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOptions} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  optionsArray: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should i do?
      </button>
    </div>
  );
};

const Options = props => {
  return props.optionsArray && props.optionsArray.length > 0 ? (
    <div>
      <RemoveAll handleDeleteOptions={props.handleDeleteOptions} />
      <p>Here are your options :</p>
      {props.optionsArray.map((item, idx) => (
        <Option
          option={item}
          handleDeleteOption={props.handleDeleteOption}
          key={idx}
          index={idx}
        />
      ))}
    </div>
  ) : (
    <p>Add an option to get start</p>
  );
};

const Option = props => {
  return (
    <div>
      <span>{props.option}</span>
      <button onClick={() => props.handleDeleteOption(props.option)}>
        Remove
      </button>
    </div>
  );
};

const RemoveAll = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.optionForm.value.trim();
    const error = this.props.handleAddOption(option);
    e.target.elements.optionForm.value = "";
    this.setState(() => ({ error }));
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="optionForm" />
          <button>Add option</button>
        </form>
        {/* <button onClick={removeArray}>Remove all</button> */}
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
