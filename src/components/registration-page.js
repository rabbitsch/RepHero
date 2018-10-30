import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { postRegData } from "../apiClients";

const handleSubmit = event => {
  event.preventDefault();
  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;
  const firstname = event.target.elements.firstname.value;
  const lastname = event.target.elements.lastname.value;
  return postRegData({ username, password, firstname, lastname });
};

const Register = props => {
  if (props.newUser) {
    console.log(props, "here is my register props");
    return <Redirect to="/main" />;
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
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

const mapStateToProps = state => ({
  newUser: state.auth.currentUser !== null
});

const Regy = reduxForm({ form: "contact" })(Register);
export default connect(mapStateToProps)(Regy);
