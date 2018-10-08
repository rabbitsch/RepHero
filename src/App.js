import React from 'react';
import {connect} from 'react-redux';
import {NavBar} from './components/navigation';
import Input from './components/input';
import CrmForm from './components/crm-form';


import './App.css';

export class App extends React.Component {

  renderResult(props){
    const myResult = this.props
    console.log(myResult,'this is my result on renderResult')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to RepHero</h1>
            <NavBar />
        </header>
        <main>
          <Input />

          <p> Test</p>
        </main>
      </div>
    );
  }
}


App.defaultProps =({
  practice: []

})

// const mapDispatchToProps = dispatch =>{
//
// }
//
const mapStateToProps = state => ({
  practice: state.practice


})

//
export default connect(mapStateToProps)(App);
