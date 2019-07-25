import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './header';
import Cars from './cars'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'facintyu',
      name: "ktuc",
      age: "78"

    }
  }


  render() {
    return (
      <div>
        <Head title= {this.state.name}
               lro = {this.state.age} />
      </div>

    );
  }
  
}

export default App;
