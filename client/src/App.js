import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import Calendar from './calendar/calendar';

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
        <Header />
        <Calendar />
      </div>
    );
  }
}
export default App;