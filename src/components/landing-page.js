import React from "react";
import { reduxForm, Field } from "redux-form";
import { Login } from "./login";
import "./landing-page.css";

export class LandingPage extends React.Component {
  render() {
    return (
      <main>
        <div className="row">
          <div className="col-10 offset-1">
            <div className="introname">
              <h3>A Sales Tool for Medical Device and Pharma Reps</h3>
              <h4>"Success is where preparation and opportunity meet."</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-5 offset-1">
            <div className="intropoints">
              <ul>
                <li>Search for Doctors offices near you</li>
                <li>
                  Research Doctor NPIs, addresses, phone numbers and specialty
                  information
                </li>
                <li>Set your goals for each sales call, record your outcome</li>
                <li>Hold yourself accountable, be a rep HERO!</li>
              </ul>
            </div>
          </div>

          <div className="col-5">
            <div className="login-face">
              <Login />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default reduxForm({ form: "contact" })(LandingPage);
