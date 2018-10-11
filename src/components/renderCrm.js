import React from "react";
import { connect } from "react-redux";
import store from "../store";
import "../grid.css";

export const RenderCrm = props => {
  console.log({ props }, "this is my render crm props");

  const extracted = props.crm;
  if (!extracted) {
    return <p>Get CRM</p>;
  }

  console.log(extracted, "this is extracted");

  return (
    <div>
      <div className="col-5 offset-1">
        <div className="crmContainer">
          <ul>
            {extracted.map(item => (
              <li key={item.uid}>
                <h2>Office Name: {item.office}</h2>
                <h3>Date of visit: {item.date}</h3>
                <p>Goals for visit: {item.goals}</p>
                <p>Outcome: {item.outcome}</p>
                <p>
                  Goals for next visit:
                  {item.nextgoals}
                </p>
              </li>
            ))}{" "}
          </ul>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return { crm: state.reducer.crm };
};

export default connect(mapStateToProps)(RenderCrm);
