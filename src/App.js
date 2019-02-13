import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import myVideo from './BokehVideo.mp4'

class App extends Component {
  render() {
    return (
      <div className="App">
          <video className="video" src={myVideo} type="video/mp4" loop autoPlay />
      </div>
    );
  }
}

export default App;
