import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { postLoginData } from "../apiClients";
import { loginAttemptAction } from "../actions/actions-auth";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Register from "./registration-page";
import store from "../store";
import "./landing-page.css";

const handleSubmit = event => {
  event.preventDefault();
  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;
  return postLoginData({ username, password });
};

export const Login = props => {
  if (props.hasAuthToken) {
    return <Redirect to="/main" />;
  }

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
      <button>
        <Link to="/register">Sign up</Link>
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null
});

// const mapStateToProps = state => {
//   console.log("state on mapStateToProps:", state);
//   return { hasAuthToken: state.auth.authToken !== null };
// };

// const Loginn = reduxForm({ form: "login" })(Login);
export default connect(mapStateToProps)(Login);
