import React from "react";
import { postData } from "../apiClients";
import { reduxForm, Field } from "redux-form";
import "./crmform.css";

export let CrmFormpt2 = ({ handleSubmit }) => {
  return (
    <div>
      <div>
        <form className="crmformFacept2" onSubmit={handleSubmit(postData)}>
          <div className="crmPost">
            <label className="crmlabel">Date</label>
            <Field name="date" component="input" type="text" label="date" />
          </div>
          <div className="crmPost">
            <label className="crmlabel">Goals</label>
            <Field
              name="goals"
              component="textarea"
              element="textarea"
              label="goals"
            />
          </div>
          <div className="crmPost">
            <label className="crmlabel">Outcome</label>
            <Field
              name="outcome"
              component="textarea"
              element="textarea"
              label="outcome"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

// <div className="crmPost">
//   <label className="crmlabel">NextGoal</label>
//   <Field
//     name="nextgoals"
//     component="textarea"
//     element="textarea"
//     label="nextgoals"
//   />
// </div>

export default reduxForm({ form: "contact" })(CrmFormpt2);
