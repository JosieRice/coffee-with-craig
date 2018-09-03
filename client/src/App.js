import React, { Component } from 'react';
// import logo from './logo.svg';
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
    // const serverInfo = this.state.response;
    const calendlyStyle = {
      minWidth: '320px',
      height: '580px',
    };
    
    return (

      <div className="App">
        <header className="App-header">
        {/* <nav>Coffee Skills Interests Portfolio</nav> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Coffee with Craig</h1>
          {/* <p className="App-intro">you can reach me at <a href="mailto:craigricetong@gmail.com?subject=Let's get some coffee.">craigricetong@gmail.com</a> while this app is under construction</p> */}
          {/* <p className="App-intro">{serverInfo}</p> */}
        </header>
        
          
          {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd_6FKnga_YV8zthlZqZPYVh9-V7fpxAivXdg7kZfyOdf3Mdw/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> */}

          <a href="https://calendly.com/coffeewithcraig/30min" className="CWC-Link" target="_blank"><h1>Let's meet up for some coffee.</h1></a>


      </div>
    );
  }
}
export default App;