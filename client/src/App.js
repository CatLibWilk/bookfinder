import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Landing from './pages/Landing'

class App extends Component {
  constructor (props){
    super(props)
  }

  componentDidMount(){
    setTimeout(load, 2000);
    
    function load() {
      document.querySelector('.wrapper').classList.add('wrapper-loaded');
      document.querySelector('.landing-background').classList.add('wrapper-loaded');
      
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header shadow={true}/>
        <Landing />
      </div>
    );
  }
}

export default App;
