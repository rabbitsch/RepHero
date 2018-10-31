import React from "react";
import { postData } from "../apiClients";
import { reduxForm, Field } from "redux-form";
import "./crmform.css";

export let CrmForm = ({ handleSubmit }) => {
  return (
    <div>
      <div>
        <form className="crmformOffice" onSubmit={handleSubmit(postData)}>
          <div className="crmPost">
            <h2>Create New Office Here </h2>
            <label className="crmlabel">Office Name</label>
            <Field name="office" component="input" type="text" label="office" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({ form: "contact" })(CrmForm);
