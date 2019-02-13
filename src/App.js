import React, { Component } from 'react';
import './App.css';
import myVideo from './BokehVideo.mp4';
import christmasLights from './ChristmasLights.mp4';
import coloredBokah from './coloredBokah.mp4';
import morningLights from './morningLights.mp4';


class App extends Component {
  render() {
    return (
      <div className="App">
          <video src={myVideo} className= "myVideo" type="video/mp4" loop autoPlay muted />
          <video src={christmasLights} className= "myVideo" type="video/mp4" loop autoPlay muted />
          <video src={coloredBokah} className= "myVideo" type="video/mp4" loop autoPlay muted />
          <video src={morningLights} className= "myVideo" type="video/mp4" loop autoPlay muted />
      </div>
    );
  }
}

export default App;
