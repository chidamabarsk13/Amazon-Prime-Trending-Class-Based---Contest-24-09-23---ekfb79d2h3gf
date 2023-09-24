
import React, { Component } from "react";
import '../styles/App.css';
import './data.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: props.slides,
      index: 0,
    };
  }

  handleNextClick= () => {
    this.setState((prevState) => ({
      index: prevState.index < this.state.slides.legth - 1 ? prevState.index + 1 : 0,
    }));
  };

  handlePrevClick= () => {
    this.setState((prevState) => ({
      index: prevState.index > 0 ? prevState.index - 1 : this.state.slides.legth - 1,
    }));
  };

  handleRestartClick = () => {
    this.setState({index:0});
  };
    

  render() {
    
    const { index, slides } = this.state;
    const currentSlide=slides[index];

    return (
      <div className="container">
      <h1 className="title" id="title">
      {currentSlide.title}
      </h1>
      <p className="text" id="text">
      {currentSlide.text}
      </p>
      <button
      className="prev-button" id="button-prev" onClick={this.handlePrevClick} disabled={index===0}>
      Prev
      </button>
      <button 
        className="next-button" id="button-next" onClick={this.handleNextClick} disabled={index===slides.lenght-1}
          >
          Next
          </button>
          <button 
          className="restart-button" id="button-restart" onClick={this.handleRestartClick} disabled={index===0}>
      Restart
      </button>
          
      </div>
    );
  }
}

export default App;

