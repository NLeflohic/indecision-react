class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showDetail: false,
      labelButton: "Show"
    };
  }

  handleClick() {
    this.setState(prevState => {
      return {
        showDetail: !prevState.showDetail,
        labelButton: prevState.showDetail ? "Show" : "Hide"
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility challenge</h1>
        <button onClick={this.handleClick}>{this.state.labelButton}</button>
        {this.state.showDetail && <p>This is the detail message</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));

// const detailMessage = "It's the detail message";

// let showDetail = false;
// let labelButton = "Show";

// const onShow = () => {
//   showDetail = !showDetail;
//   showDetail ? (labelButton = "Hide") : (labelButton = "Show");
//   render();
// };

// const render = () => {
//   let detailComponent = (
//     <div>
//       <h1>Visible challenge</h1>
//       <button onClick={onShow}>{labelButton}</button>
//       {showDetail && <p>This is the detail message</p>}
//     </div>
//   );
//   ReactDOM.render(detailComponent, appRoot);
// };

// const appRoot = document.getElementById("app");
// render();
