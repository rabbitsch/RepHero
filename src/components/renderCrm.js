import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";
import CrmForm from "./crm-form-officetitle";
import RenderCrmList from "./rendercrmList";
import { deleteData } from "../apiClients";
import { putData } from "../apiClients";
import store from "../store";
import CrmFormpt2 from "./crmformpt2";
import "../grid.css";
import "./crmform.css";

export const RenderCrm = props => {
  const extracted = props.crm;
  if (!extracted) {
    return <p>Get CRM</p>;
  }

  console.log(extracted, "this is extracted");

  return (
    <div>
      <div className="crmcontent">
        <CrmForm />
        <ul>
          {extracted.map(item => (
            <li key={item.uid}>
              <h2>Office Name: {item.title}</h2>

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
              <RenderCrmList />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return { crm: state.reducer.crm };
};

export default connect(mapStateToProps)(RenderCrm);
