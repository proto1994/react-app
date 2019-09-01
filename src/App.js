import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {addAction} from './ducks/index';
import {reduceAction} from './ducks/reducer';
import store from './ducks/store';
export default class App extends Component {

  componentDidMount() {

    store.subscribe(() => {
     console.log(store.getState())
    })
  }

  add = () => {
    store.dispatch(addAction());
  }

  reduce = () => {
    store.dispatch(reduceAction());
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.props.count}</p>
        <button onClick={this.add}>add</button> 
        <button onClick={this.reduce}>reduce</button>  
      </div>
    );
  }
}
