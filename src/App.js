import React from "react";
import { connect } from "react-redux";
import { NavBar } from "./components/navigation";
import Input from "./components/input";

import RenderDocData from "./components/renderDoctorinfo";
import RenderCrm from "./components/renderCrm";
import CrmForm from "./components/crm-form";
import store from "./store";
import axios from "axios";
import { getCrmSuccess } from "./actions/actions-crm";
import { getCrmRequest } from "./actions/actions-crm";
import { Link, Route } from "react-router-dom";
import LandingPage from "./components/landing-page";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./grid.css";
import "./App.css";

library.add(faFire);
const { API_BASE_URL } = require("./config");

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crm: [],
      loading: false
    };
  }

  componentDidMount() {
    // store.dispatch(getCrmRequest({ loading: true }), () => {
    axios
      .get(`${API_BASE_URL}/api/visits`)
      .then(res => res.data)
      .then(crm => store.dispatch(getCrmSuccess(crm)));
  }

  render() {
    return (
      <div className="App">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Amethysta');
        </style>
        <header className="App-header">
          <h1>
            Welcome to RepHero <FontAwesomeIcon icon="fire" />
          </h1>
        </header>
        <main>
          <LandingPage />
        </main>
      </div>
    );
  }
}

//<Route path="/landing-page" component={LandingPage} />

App.defaultProps = {
  practice: [],
  crm: []
};

const mapStateToProps = state => ({
  practice: state.practice,
  crm: state.crm
});

export default connect(mapStateToProps)(App);
