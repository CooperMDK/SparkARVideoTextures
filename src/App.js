import React, { Component } from 'react';
import './App.css';
import myVideo from './BokehVideo.mp4'

class App extends Component {
  render() {
    return (
      <div className="App">
          <video src={myVideo} className= "myVideo" type="video/mp4" loop autoPlay muted />
      </div>
    );
  }
}

export default App;
