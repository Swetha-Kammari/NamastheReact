/*
    <div id="parent">
    <div id="child1">
        <h1>I'm h1 Tag</h1>
        <h2>I'm h2 Tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 Tag</h1>
        <h2>I'm h2 Tag</h2>
    </div>
    </div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "child1" }, "I'm h1 Tag"),
    React.createElement("h2", { id: "child2" }, "I'm h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "child1" }, "I'm h1 Tag"),
    React.createElement("h2", { id: "child2" }, "I'm h2 Tag"),
  ]),
]);
console.log(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "something" },
//   "Hello world from React"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
