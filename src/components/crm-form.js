import React from "react";
import { postData } from "../crmData";
import { reduxForm, Field } from "redux-form";

export let CrmForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit(postData)}>
      <div>
        <label>Office Name</label>
        <Field
          name="officename"
          component="input"
          type="text"
          label="officename"
        />
      </div>
      <div>
        <label>Date</label>
        <Field name="date" component="input" type="text" label="date" />
      </div>
      <div>
        <label>Goals</label>
        <Field
          name="goals"
          component="textarea"
          element="textarea"
          label="goals"
        />
      </div>
      <div>
        <label>Outcome</label>
        <Field
          name="outcome"
          component="textarea"
          element="textarea"
          label="outcome"
        />
      </div>
      <div>
        <label>NextGoal</label>
        <Field
          name="nextgoal"
          component="textarea"
          element="textarea"
          label="nextgoal"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({ form: "contact" })(CrmForm);
