import React from "react";
import { connect } from "react-redux";
import CrmForm from "./crm-form";
import { deleteData } from "../apiClients";
import { putData } from "../apiClients";
import store from "../store";
import "../grid.css";
import "./crmform.css";

export const RenderCrm = props => {
  console.log({ props }, "this is my render crm props");

  const extracted = props.crm;
  if (!extracted) {
    return <p>Get CRM</p>;
  }

  console.log(extracted, "this is extracted");

  return (
    <div>
      <div className="col-5">
        <div className="crmContainer">
          <CrmForm />
          <ul>
            {extracted.map(item => (
              <li key={item.uid}>
                <h2>Office Name: {item.office}</h2>
                <h3>Date of visit: {item.date}</h3>
                <p>Goals for visit: {item.goals}</p>
                <p>
                  Outcome: <textarea />
                </p>
                <p>
                  Goals for next visit:
                  <textarea />
                </p>
                <button
                  onClick={event => {
                    return putData(item.id);
                  }}
                >
                  Update
                </button>
                <button
                  onClick={event => {
                    return deleteData(item.id);
                  }}
                >
                  Delete
                </button>
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
