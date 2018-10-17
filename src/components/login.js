import React from "react";
import { reduxForm, Field } from "redux-form";
import { postLoginData } from "../apiClients";
import store from "../store";
import "./landing-page.css";

//this is where my problem is!.. need to send both values at the same time..
const handleSubmit = event => {
  event.preventDefault();
  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;
  console.log(username, "this is the user value");
  console.log(password, "this is the pass value");
  return postLoginData({ username, password });
};

export const Login = () => {
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
