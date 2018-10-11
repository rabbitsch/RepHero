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
    <div className="row">
      <div className="col-5 offset-1">
        <div className="crmContainer">
          <ul>
            {extracted.map(item => (
              <li key={item.uid}>
                <h2>{item.office}</h2>
                <h3>{item.date}</h3>
                <p>{item.goals}</p>
                <p>{item.outcome}</p>
                <p>{item.nextgoals}</p>
              </li>
            ))}{" "}
          </ul>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return { crm: state.crm };
};

export default connect(mapStateToProps)(RenderCrm);
