import React from "react";
import { connect } from "react-redux";

import RenderCrm from "./renderCrm";
import "./crmform.css";

export const CrmContainer = props => {
  return (
    <div className="col-5">
      <div className="crmContainer">
        <main>
          <RenderCrm />
        </main>
      </div>
    </div>
  );
};

export default connect()(CrmContainer);
