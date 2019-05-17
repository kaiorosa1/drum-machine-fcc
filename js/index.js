class App extends React.Component {
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", null, "App Component")));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));