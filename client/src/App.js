import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Landing from './pages/Landing';
import Home from './pages/Home';

class App extends Component {
  constructor (props){
    super(props)
  }

  render() {
    return (
      <div className="wrapper">
        <Header shadow={true}/>
        <Router>
          <Switch>

          <div id='paths-container' className="container-fluid p-md-0">
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Home} />

          </div>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
