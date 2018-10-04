import React, { Component } from 'react';
import NavBar from './components/navigation';
import CrmForm from './components/crm-form';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Rep Hero</h1>
            <NavBar />
        </header>
        <main>
          <CrmForm />
        </main>
      </div>
    );
  }
}

export default App;
