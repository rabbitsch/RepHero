import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";
import CrmForm from "./crm-form-officetitle";
import { deleteData } from "../apiClients";
import { putData } from "../apiClients";
import store from "../store";
import CrmFormpt2 from "./crmformpt2";
import "../grid.css";
import "./crmform.css";

export const RenderCrmList = props => {
  //console.log({ props }, "this is my render content props");

  const extracted = props.content;
  if (!extracted) {
    return <p>Get Content</p>;
  }

  //  console.log(extracted, "this is extracted, CONTENT");

  //return <pre>${JSON.stringify(extracted)}</pre>;

  return (
    <div className="crmList">
      <Scrollbars style={{ width: 500, height: 300 }}>
        <ul>
          <CrmFormpt2 />
          {extracted.map(item => {
            return (
              <li key={item.uid}>
                <h3>Date of visit: {item.date}</h3>
                <p>Goals for visit: {item.goals}</p>
                <p> Outcome : {item.outcome}</p>
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
            );
          })}
        </ul>
      </Scrollbars>
    </div>
  );
};
const mapStateToProps = state => {
  return { content: state.reducer.content, crm: state.reducer.crm };
};

export default connect(mapStateToProps)(RenderCrmList);
