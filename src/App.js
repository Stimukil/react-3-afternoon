import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data'

class App extends Component {
  constructor(){
    super();

    this.state = {
      currentIndex: 1

    }
  }

  incrementIndex() {
    if(this.state.currentIndex < 24) {
      this.setState({currentIndex: this.state.currentIndex + 1})
    }else if(this.state.currentIndex === 24) {
      this.setState({currentIndex: 0})
    }
  }

  decrementIndex() {
    if(this.state.currentIndex > 0) {
      this.setState({currentIndex: this.state.currentIndex - 1})
    }else if(this.state.currentIndex === 0) {
      this.setState({currentIndex: 24})
    }
  }

  render() {
    return(
      <div className="App">
          <header className="header-box">Home</header>
          <body className="main-body-box">
          <div className="inside-body-box">
          <div className="name-box">{data[this.state.currentIndex].name.first}&nbsp;{data[this.state.currentIndex].name.last}</div>
            <div className="from-box">From: {data[this.state.currentIndex].city}&nbsp;{data[this.state.currentIndex].country}</div>
            <div className="job-title-box">Job Title: {data[this.state.currentIndex].title}</div>
            <div className="employer-box">Employer: {data[this.state.currentIndex].employer}</div>
            <div className="favorite-movies-box">Favorite Movies: </div>
              <ol className="movie-list">
                <li>{data[this.state.currentIndex].favoriteMovies[0]}</li>
                <li>{data[this.state.currentIndex].favoriteMovies[1]}</li>
                <li>{data[this.state.currentIndex].favoriteMovies[2]}</li>
              </ol>
          </div>
          <div className="tool-bar">
            <button className="previous-button" onClick={() => this.decrementIndex()}> &lt; Previous</button>
              <div className="center-button-group">
            <button className="edit-button">Edit</button>
            <button className="delete-button">Delete</button>
            <button className="new-button">New</button>
              </div>
            <button className="next-button" onClick={() => this.incrementIndex()}>Next &gt; </button>
          </div>
          </body>
      </div>
    )
  }
}

export default App;
