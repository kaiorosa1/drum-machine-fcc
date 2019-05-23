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
      displayText: "default text" };

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
    this.keyPressed = this.keyPressed.bind(this);
  }
  keyPressed(e) {
    let displayMessage;
    switch (e.keyCode) {
      case 81:
        displayMessage = "Q was pressed";
        document.getElementById("Q").play();
        break;
      case 87:
        displayMessage = "W was pressed";
        document.getElementById("W").play();
        break;
      case 69:
        displayMessage = "E was pressed";
        document.getElementById("E").play();
        break;
      case 65:
        displayMessage = "A was pressed";
        document.getElementById("A").play();
        break;
      case 83:
        displayMessage = "S was pressed";
        document.getElementById("S").play();
        break;
      case 68:
        displayMessage = "D was pressed";
        document.getElementById("D").play();
        break;
      case 90:
        displayMessage = "Z was pressed";
        document.getElementById("Z").play();
        break;
      case 88:
        displayMessage = "X was pressed";
        document.getElementById("X").play();
        break;
      case 67:
        displayMessage = "C was pressed";
        document.getElementById("C").play();
        break;
      default:
        displayMessage = "default case";}


    this.props.changeDisplay(displayMessage);
  }
  keyClicked(e) {
    let displayMessage = "DEFAULT";
    switch (e.target.id) {
      case "Q-audio":
        displayMessage = "Q was pressed";
        document.getElementById("Q").play();
        break;
      case "W-audio":
        displayMessage = "W was pressed";
        document.getElementById("W").play();
        break;
      case "E-audio":
        displayMessage = "E was pressed";
        document.getElementById("E").play();
        break;
      case "A-audio":
        displayMessage = "A was pressed";
        document.getElementById("A").play();
        break;
      case "S-audio":
        displayMessage = "S was pressed";
        document.getElementById("S").play();
        break;
      case "D-audio":
        displayMessage = "D was pressed";
        document.getElementById("D").play();
        break;
      case "Z-audio":
        displayMessage = "Z was pressed";
        document.getElementById("Z").play();
        break;
      case "X-audio":
        displayMessage = "X was pressed";
        document.getElementById("X").play();
        break;
      case "C-audio":
        displayMessage = "C was pressed";
        document.getElementById("C").play();
        break;
      default:
        displayMessage = "default case";}


    this.props.changeDisplay(displayMessage);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.keyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPressed);
  }

  render() {
    return (
      React.createElement("div", { onKeyPress: this.keyPressed },
      React.createElement("div", { class: "container" },
      React.createElement("div", {
        class: "drum-pad",
        id: "Q-audio",
        onClick: this.keyClicked.bind(this) },

      React.createElement("audio", {
        controls: true,
        class: "clip",
        id: "Q",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }), "Q"),



      React.createElement("div", {
        class: "drum-pad",
        id: "W-audio",
        onClick: this.keyClicked.bind(this) },

      React.createElement("audio", {
        controls: true,
        class: "clip",
        id: "W",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }), "W"),



      React.createElement("div", {
        class: "drum-pad",
        id: "E-audio",
        onClick: this.keyClicked.bind(this) },

      React.createElement("audio", {
        controls: true,
        class: "clip",
        id: "E",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }), "E"),



      React.createElement("div", {
        class: "drum-pad",
        id: "A-audio",
        onClick: this.keyClicked.bind(this) },

      React.createElement("audio", {
        controls: true,
        class: "clip",
        id: "A",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }), "A"),



      React.createElement("div", {
        class: "drum-pad",
        id: "S-audio",
        onClick: this.keyClicked.bind(this) },

      React.createElement("audio", {
        controls: true,
        class: "clip",
        id: "S",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }), "S"),



      React.createElement("div", {
        class: "drum-pad",
        id: "D-audio",
        onClick: this.keyClicked.bind(this) },

      React.createElement("audio", {
        controls: true,
        class: "clip",
        id: "D",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }), "D"),



      React.createElement("div", {
        class: "drum-pad",
        id: "Z-audio",
        onClick: this.keyClicked.bind(this) },

      React.createElement("audio", {
        controls: true,
        class: "clip",
        id: "Z",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }), "Z"),



      React.createElement("div", {
        class: "drum-pad",
        id: "X-audio",
        onClick: this.keyClicked.bind(this) },

      React.createElement("audio", {
        controls: true,
        class: "clip",
        id: "X",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }), "X"),



      React.createElement("div", {
        class: "drum-pad",
        id: "C-audio",
        onClick: this.keyClicked.bind(this) },

      React.createElement("audio", {
        controls: true,
        class: "clip",
        id: "C",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }), "C"))));






  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));