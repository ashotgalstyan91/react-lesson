import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './header';
import Cars from './cars'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'facintyu'

    }
  }


  render() {
    return (
      <div>
        <Head title= {this.state}/>
      </div>

    );
  }
  
}

export default App;
