import React from "react";
import { reduxForm, Field } from "redux-form";

const Login = ({ handleSubmit }) => {
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

// export const login = (username, password) => dispatch => {
//     dispatch(authRequest());
//     return (
//         fetch(`${API_BASE_URL}/auth/login`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username,
//                 password
//             })
//         })

export default reduxForm({ form: "contact" })(Login);
