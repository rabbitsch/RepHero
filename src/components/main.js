import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
import RenderDocData from "./renderDoctorinfo";
import CrmContainer from "./containerCrm";

export const Main = props => {
  return (
    <div className="Main">
      <header className="Main-header" />
      <main>
        <RenderDocData />
        <CrmContainer />
      </main>
    </div>
  );
};

export default connect()(Main);
