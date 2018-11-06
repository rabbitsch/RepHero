import React from "react";
import { connect } from "react-redux";
import { searchPractice } from "../actions/actions-doc";
import { searchLocation } from "../actions/actions-doc";
import store from "../store";

export const Input = props => {
  const handleSubmit = event => {
    event.preventDefault();

    const newSearch = event.target.elements.search.value;
    //const newSearchlocation = event.target.elements.searchloc.value;

    //const submitLocation = searchLocation(newSearchlocation);
    const submitSearch = searchPractice(newSearch);
    store.dispatch(submitSearch);
    //store.dispatch(submitLocation);
  };

  return (
    <div className="row">
      <div className="col-10 offset-1">
        <div className="inputface">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              onChange={props.onChange}
              placeholder="Type Targeted Medical Practice Here"
            />

            <button type="submit">Submit Your Answer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// <input
//   type="text"
//   name="searchloc"
//   onChange={props.onChange}
//   placeholder="Type Location here"
// />

export default connect()(Input);
