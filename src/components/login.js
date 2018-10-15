import React from "react";
import { reduxForm, Field } from "redux-form";
import { postLoginData } from "../apiClients";

const Login = ({ handleSubmit }) => {
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(postLoginData)}>
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({ form: "contact" })(Login);
