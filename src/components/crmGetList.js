import React from "react";
import { connect } from "react-redux";
import { crmData } from "../crmData";
import store from "../store";
import axios from "axios";
import { getCrmSuccess } from "../actions/actions-crm";

export const GetCrm = props => {
  console.log(props, "this is my props GetCrm talking");
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="Crmface">
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          onClick={event => {
            console.log("hey i am working");
            console.log(event);
            return crmData(event);
          }}
          onChange={props.onChange}
        >
          Get CRM
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return { crm: state.reducer.crm };
};

export default connect(mapStateToProps)(GetCrm);
