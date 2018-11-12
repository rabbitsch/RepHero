import React from "react";
import { Field } from "redux-form";
import "./crmform.css";

export const NewVisitForm = props => {
  return (
    <div>
      <h3 className="newVisitTitle">Post New Visit Here</h3>
      <form
        className="crmformFacept2"
        onSubmit={ev => {
          ev.preventDefault();
          const newVisit = {
            office: props.officeId,
            date: ev.target.elements["date"].value,
            goals: ev.target.elements["goals"].value,
            outcome: ev.target.elements["outcome"].value
          };
          props.onSubmit(newVisit);
        }}
      >
        <div className="crmPost">
          <label className="crmlabel">Date</label>
          <input type="date" name="date" component="input" label="date" />
        </div>
        <div className="crmPost">
          <label className="crmlabel">Goals</label>
          <input
            name="goals"
            component="textarea"
            element="textarea"
            label="goals"
          />
        </div>
        <div className="crmPost">
          <label className="crmlabel">Outcome</label>
          <input
            name="outcome"
            component="textarea"
            element="textarea"
            label="outcome"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewVisitForm;
