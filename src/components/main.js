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
import RenderCrm from "./renderCrm";

export const Main = props => {
  return (
    <div className="Main">
      <header className="Main-header" />
      <main>
        <RenderDocData />
        <RenderCrm />
      </main>
    </div>
  );
};

export default connect()(Main);
