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
    let displayMessage = "DEFAULT";
    switch (e.target.id) {
      case "Q":
        displayMessage = "Q was pressed";
        document.getElementById("Q-audio").play();
        break;
      case "W":
        displayMessage = "W was pressed";
        document.getElementById("W-audio").play();
        break;
      case "E":
        displayMessage = "E was pressed";
        document.getElementById("E-audio").play();
        break;
      case "A":
        displayMessage = "A was pressed";
        document.getElementById("A-audio").play();
        break;
      case "S":
        displayMessage = "S was pressed";
        document.getElementById("S-audio").play();
        break;
      case "D":
        displayMessage = "D was pressed";
        document.getElementById("D-audio").play();
        break;
      case "Z":
        displayMessage = "Z was pressed";
        document.getElementById("Z-audio").play();
        break;
      case "X":
        displayMessage = "X was pressed";
        document.getElementById("Q-audio").play();
        break;
      case "C":
        displayMessage = "C was pressed";
        document.getElementById("C-audio").play();
        break;
      default:
        displayMessage = "default case";}



    this.props.changeDisplay(displayMessage);
  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { class: "container" },
      React.createElement("div", { class: "drum-pad", id: "Q", onClick: this.keyClicked.bind(this) }, "Q",
      React.createElement("audio", { controls: true, class: "clip", id: "Q-audio", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" })),


      React.createElement("div", { class: "drum-pad", id: "W", onClick: this.keyClicked.bind(this) }, "W",
      React.createElement("audio", { controls: true, class: "clip", id: "W-audio", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" })),


      React.createElement("div", { class: "drum-pad", id: "E", onClick: this.keyClicked.bind(this) }, "E",
      React.createElement("audio", { controls: true, class: "clip", id: "E-audio", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" })),


      React.createElement("div", { class: "drum-pad", id: "A", onClick: this.keyClicked.bind(this) }, "A",
      React.createElement("audio", { controls: true, class: "clip", id: "A-audio", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" })),


      React.createElement("div", { class: "drum-pad", id: "S", onClick: this.keyClicked.bind(this) }, "S",
      React.createElement("audio", { controls: true, class: "clip", id: "S-audio", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" })),


      React.createElement("div", { class: "drum-pad", id: "D", onClick: this.keyClicked.bind(this) }, "D",
      React.createElement("audio", { controls: true, class: "clip", id: "D-audio", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" })),


      React.createElement("div", { class: "drum-pad", id: "Z", onClick: this.keyClicked.bind(this) }, "Z",
      React.createElement("audio", { controls: true, class: "clip", id: "Z-audio", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" })),


      React.createElement("div", { class: "drum-pad", id: "X", onClick: this.keyClicked.bind(this) }, "X",
      React.createElement("audio", { controls: true, class: "clip", id: "X-audio", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" })),


      React.createElement("div", { class: "drum-pad", id: "C", onClick: this.keyClicked.bind(this) }, "C",
      React.createElement("audio", { controls: true, class: "clip", id: "C-audio", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" })))));





  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));