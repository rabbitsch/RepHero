import React from "react";
import { connect } from "react-redux";
import { NavBar } from "./components/navigation";
import Input from "./components/input";
import GetCrm from "./components/crmGetList";
import RenderDocData from "./components/doctorinfo";
import RenderCrm from "./components/renderCrm";
import CrmForm from "./components/crm-form";

import "./grid.css";
import "./App.css";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to RepHero</h1>
          <NavBar />
        </header>
        <main>
          <GetCrm />
          <Input />
          <div className="row">
            <RenderDocData />
            <RenderCrm />
          </div>
        </main>
      </div>
    );
  }
}

App.defaultProps = {
  practice: [],
  crm: []
};

const mapStateToProps = state => ({
  practice: state.practice,
  crm: state.crm
});

//
export default connect(mapStateToProps)(App);
