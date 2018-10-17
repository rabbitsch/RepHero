import React from "react";
import { reduxForm, Field } from "redux-form";
import { postRegData } from "../apiClients";

const Register = ({ handleSubmit }) => {
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(postRegData)}>
          <div>
            <label>Username</label>
            <Field
              name="username"
              component="input"
              type="text"
              label="username"
            />
          </div>
          <div>
            <label>Password</label>
            <Field
              name="password"
              component="input"
              type="text"
              label="password"
            />
          </div>
          <div>
            <label>First Name</label>
            <Field
              name="firstname"
              component="input"
              type="text"
              label="firstname"
            />
          </div>
          <div>
            <label>Last Name</label>
            <Field
              name="lastname"
              component="input"
              type="text"
              label="lastname"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({ form: "contact" })(Register);
