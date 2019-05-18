class App extends React.Component {
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", null, "App Component"),
      React.createElement(DrumMachine, null)));


  }}


class DrumMachine extends React.Component {
  render() {
    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement("h2", null, "Drum Component"),
      React.createElement("div", { id: "display" }),
      React.createElement("div", { class: "container" },
      React.createElement("div", { class: "drum-pad", id: "Q" }, "Q"),
      React.createElement("div", { class: "drum-pad", id: "W" }, "W"),
      React.createElement("div", { class: "drum-pad", id: "E" }, "E"),
      React.createElement("div", { class: "drum-pad", id: "A" }, "A"),
      React.createElement("div", { class: "drum-pad", id: "S" }, "S"),
      React.createElement("div", { class: "drum-pad", id: "D" }, "D"),
      React.createElement("div", { class: "drum-pad", id: "Z" }, "Z"),
      React.createElement("div", { class: "drum-pad", id: "X" }, "X"),
      React.createElement("div", { class: "drum-pad", id: "C" }, "C"))));



  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));