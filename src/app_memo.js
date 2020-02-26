console.log("App.js is running");

var app = {
  title: "Indecision App",
  subTitle: "Put your life in hands of a computer",
  optionsArray: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.optionForm.value;
  if (option) {
    app.optionsArray.push(option);
    e.target.elements.optionForm.value = "";
    render();
  }
};

const removeArray = () => {
  if (app.optionsArray && app.optionsArray.length > 0) {
    app.optionsArray.splice(0);
    renderTemplate();
  }
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.optionsArray.length);
  const option = app.optionsArray[randomNum];
  alert(option);
};

const renderTemplate = () => {
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      {app.optionsArray && app.optionsArray.length > 0 ? (
        <div>
          <p>Here are your options :</p>
          <ol>
            {app.optionsArray.map((item, idx) => (
              <li key={idx}>
                options {idx + 1} : {item}
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <p>No options</p>
      )}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="optionForm" />
        <button>Add option</button>
      </form>
      <button disabled={app.optionsArray.length === 0} onClick={onMakeDecision}>
        What should i do
      </button>
      <button onClick={removeArray}>Remove all</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
renderTemplate();
//ReactDOM.render(template, appRoot);

// const user = {
//   name: "Nico",
//   age: 43,
//   location: "Paris"
// };
// const userName = "Nico";
// const userAge = 17;
// const userLocation = "Paris";

// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }

// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : "Anonymous"}</h1>
//     {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );

// var count = 0;
// const addOne = () => {
//   count++;
//   renderCountApp();
// };

// const minusOne = () => {
//   count--;
//   renderCountApp();
// };

// const reset = () => {
//   count = 0;
//   renderCountApp();
// };

// const renderCountApp = () => {
//   const templateThree = (
//     <div>
//       <h1> Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateThree, appRoot);
// };

// renderCountApp();
