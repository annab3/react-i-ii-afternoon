import React, { Component } from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';
import data from './data'
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0
    }
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
  }
  handleClickNext() {
    this.setState({index: this.state.index + 1})
    this.forceUpdate()
  }
  handleClickPrevious() {
    this.setState({index: this.state.index - 1})
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1 class="home">Home</h1>
          </nav>
        <main>
          <Header index={this.state.index}/>
          <Body index={this.state.index}/>
          <Footer index={this.state.index} next={this.handleClickNext} previous={this.handleClickPrevious}/>
        </main>
      </div>
    );
  }
}

export default App;
