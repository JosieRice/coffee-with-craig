import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  // Fetch express server information after first mount
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  // grabs body of express route stated in response
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    const serverInfo = this.state.response;
    
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Coffee with Craig</h1>
          {/* <p className="App-intro">{serverInfo}</p> */}
          <p className="App-intro">Schedule a coffee date.</p>
        </header>
      </div>
    );
  }
}
export default App;