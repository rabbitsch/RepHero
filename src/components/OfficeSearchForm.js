import React from "react";
import { connect } from "react-redux";
import { searchPractices } from "../actions/actions-doc";
import { locationData } from "../locationData";
import store from "../store";

export const OfficeSearchForm = props => {
  const handleSubmit = event => {
    event.preventDefault();
    console.log("OfficeSearchForm submitted");

    const name = event.target.elements.practiceName.value;
    const location = event.target.elements.practiceLocation.value;

    store.dispatch(searchPractices({ name, location }));
  };

  return (
    <div className="row">
      <div className="col-10 offset-1">
        <div className="inputface">
          <form onSubmit={handleSubmit}>
            <p>
              <input
                type="text"
                name="practiceName"
                placeholder="Practice Name"
              />
            </p>
            <p>
              <input
                type="text"
                name="practiceLocation"
                placeholder="Practice Location"
              />
            </p>
            <p>
              <button type="submit">Submit Your Answer</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect()(OfficeSearchForm);
