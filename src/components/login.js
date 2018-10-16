import React from "react";
import { reduxForm, Field } from "redux-form";
import { postLoginData } from "../apiClients";
import "./landing-page.css";

export const Login = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <Field name="username" component="input" type="text" label="username" />
      </div>
      <div>
        <label>Password:</label>
        <Field name="password" component="input" type="text" label="password" />
      </div>
      <button type="submit">Login</button>
      <button>Sign Up</button>
    </form>
  );
};

export default reduxForm({ form: "login" })(Login);
