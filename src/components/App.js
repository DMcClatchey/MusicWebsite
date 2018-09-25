import React, { Component } from 'react';
import background from '../resources/HomePageBackground.jpg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundImage: `url(${background})`}} >
        <div className="App-header">
          <h1 className="App-title">DAVID MCCLATCHEY</h1>

        </div>
        {/* <img src={background} className="App-background" alt="background" /> */}
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}


export default App;
