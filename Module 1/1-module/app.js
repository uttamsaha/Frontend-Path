// console.log("Hello")

// console.log("React: ", React);
// console.log(ReactDOM)

// const root = document.getElementById("root");
// root.innerText = "Hello World";

/*
const HelloWorld = () => {
  return React.createElement("p", {}, "Hello world");
};
// creating an h1 element,

const App = () => {

    return React.createElement(
      "h1",
      { style: { color: "red" } },
      "This is h1 tag",
      HelloWorld()
    );
  
};
const root = ReactDOM.createRoot(document.getElementById("root")); //creating root


root.render(React.createElement(App)); //rendering app
*/



const HelloWorld = () => {
    return <div>Hello world</div> 
}
const App = () => {
    return (<React.Fragment><div>This is a manual react app</div> <HelloWorld/></React.Fragment>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)

