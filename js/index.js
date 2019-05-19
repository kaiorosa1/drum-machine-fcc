class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", null, "App Component"),
      React.createElement(DrumMachine, null)));


  }}


class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement("h2", null, "Drum Component"),
      React.createElement(Display, null),
      React.createElement(DrumPad, null)));


  }}


class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'display default text' };

  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { id: "display" }, this.state.text)));


  }}


class DrumPad extends React.Component {
  constructor(props) {
    super(props);
  }
  keyClicked(e) {
    alert("The " + e.target.id + " was clicked");
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { class: "container" },
      React.createElement("div", { class: "drum-pad", id: "Q", onClick: this.keyClicked }, "Q"),
      React.createElement("div", { class: "drum-pad", id: "W", onClick: this.keyClicked }, "W"),
      React.createElement("div", { class: "drum-pad", id: "E", onClick: this.keyClicked }, "E"),
      React.createElement("div", { class: "drum-pad", id: "A", onClick: this.keyClicked }, "A"),
      React.createElement("div", { class: "drum-pad", id: "S", onClick: this.keyClicked }, "S"),
      React.createElement("div", { class: "drum-pad", id: "D", onClick: this.keyClicked }, "D"),
      React.createElement("div", { class: "drum-pad", id: "Z", onClick: this.keyClicked }, "Z"),
      React.createElement("div", { class: "drum-pad", id: "X", onClick: this.keyClicked }, "X"),
      React.createElement("div", { class: "drum-pad", id: "C", onClick: this.keyClicked }, "C"))));



  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));