import React from "react";
import { postOfficeTitle } from "../apiClients";
import { reduxForm, Field } from "redux-form";
import "./crmform.css";

export let CrmForm = ({ handleSubmit }) => {
  return (
    <div>
      <div>
        <form
          className="crmformOffice"
          onSubmit={handleSubmit((values, dispatch) => {
            console.log("handleSubmit", { values, dispatch });

            postOfficeTitle({ title: values.office }).then(office =>
              dispatch({
                type: "NEW_OFFICE",
                office
              })
            );
          })}
        >
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
