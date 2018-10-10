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

    // const newSearch = event.target.elements.search.value;

    // const submitSearch = crmData(event);
    // store.dispatch(submitSearch);

    const { API_BASE_URL } = require("../config");

    const url = `${API_BASE_URL}/api/crm`;

    function crmData(event) {
      return axios
        .get(`${API_BASE_URL}/api/crm`)
        .then(res => {
          console.log(res, "this is res in my api");
          if (!res.ok) {
            return Promise.reject(res.statusText);
          }
          console.log(res, "this is my axios reponse");
          return res.json();
        })
        .then(crm => {
          store.dispatch(getCrmSuccess(crm));
        });
    }
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
  return { crm: state.crm };
};

export default connect(mapStateToProps)(GetCrm);
