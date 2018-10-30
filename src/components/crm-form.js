import React from "react";
import { postData } from "../apiClients";
import { reduxForm, Field } from "redux-form";
import "./crmform.css";

export let CrmForm = ({ handleSubmit }) => {
  return (
    <div>
      <div>
        <form className="crmformFace" onSubmit={handleSubmit(postData)}>
          <div>
            <label className="crmlabel">Office Name</label>
            <Field name="office" component="input" type="text" label="office" />
          </div>
          <div>
            <label className="crmlabel">Date</label>
            <Field name="date" component="input" type="text" label="date" />
          </div>
          <div>
            <label className="crmlabel">Goals</label>
            <Field
              name="goals"
              component="textarea"
              element="textarea"
              label="goals"
            />
          </div>
          <div>
            <label className="crmlabel">Outcome</label>
            <Field
              name="outcome"
              component="textarea"
              element="textarea"
              label="outcome"
            />
          </div>
          <div>
            <label className="crmlabel">NextGoal</label>
            <Field
              name="nextgoals"
              component="textarea"
              element="textarea"
              label="nextgoals"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({ form: "contact" })(CrmForm);
