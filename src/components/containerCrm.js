import React from "react";
import { connect } from "react-redux";
import MainPage from "./MainPage";
import CrmForm from "./crm-form-officetitle";

import "./crmform.css";

export const CrmContainer = props => {
  return (
    <div className="col-5">
      <div className="crmContainer">
        <main>
          <CrmForm />
          <MainPage />
        </main>
      </div>
    </div>
  );
};

export default connect()(CrmContainer);
