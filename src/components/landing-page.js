import React from "react";
import { reduxForm, Field } from "redux-form";

export class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <header>
            <h1>Welcome to RepHero</h1>
          </header>
          <main>
            <h3>A Sales Tool for Medical Device and Pharma Reps</h3>
            <h4>"Success is where preparation and opportunity meet."</h4>
            <ul>
              <li>Search for Doctors offices near you</li>
              <li>
                Research Doctor NPIs, addresses, phone numbers and specialty
                information
              </li>
              <li>Set your goals for each sales call, record your outcome</li>
              <li>Hold yourself accountable, be a rep HERO!</li>
            </ul>
          </main>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: "contact" })(Login);
