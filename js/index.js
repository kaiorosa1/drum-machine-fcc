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
    this.state = {
      displayText: 'default text' };

  }

  changeDisplay(txt) {
    this.setState({
      displayText: txt });

  }

  render() {
    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement("h2", null, "Drum Component"),
      React.createElement(Display, { displayText: this.state.displayText }),
      React.createElement(DrumPad, { changeDisplay: this.changeDisplay.bind(this) })));


  }}


class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { id: "display" }, this.props.displayText)));


  }}


class DrumPad extends React.Component {
  constructor(props) {
    super(props);
  }
  keyClicked(e) {
    this.props.changeDisplay(e.target.id);
    // depending on the id play a sound
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { class: "container" },
      React.createElement("div", { class: "drum-pad", id: "Q", onClick: this.keyClicked.bind(this) }, "Q"),
      React.createElement("div", { class: "drum-pad", id: "W", onClick: this.keyClicked.bind(this) }, "W"),
      React.createElement("div", { class: "drum-pad", id: "E", onClick: this.keyClicked.bind(this) }, "E"),
      React.createElement("div", { class: "drum-pad", id: "A", onClick: this.keyClicked.bind(this) }, "A"),
      React.createElement("div", { class: "drum-pad", id: "S", onClick: this.keyClicked.bind(this) }, "S"),
      React.createElement("div", { class: "drum-pad", id: "D", onClick: this.keyClicked.bind(this) }, "D"),
      React.createElement("div", { class: "drum-pad", id: "Z", onClick: this.keyClicked.bind(this) }, "Z"),
      React.createElement("div", { class: "drum-pad", id: "X", onClick: this.keyClicked.bind(this) }, "X"),
      React.createElement("div", { class: "drum-pad", id: "C", onClick: this.keyClicked.bind(this) }, "C"))));



  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));