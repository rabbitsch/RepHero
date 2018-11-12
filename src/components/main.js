import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
import MainPage from "./MainPage";
import RenderDocData from "./renderDoctorinfo";
import CrmContainer from "./containerCrm";
import OfficeSearchForm from "./OfficeSearchForm";
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

//  <CrmContainer />

// <MainPage />
// <hr />

export default connect()(Main);
