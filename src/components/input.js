import React from "react";
import { connect } from "react-redux";
import { searchPractice } from "../actions/actions-doc";
import store from "../store";

export const Input = props => {
  const handleSubmit = event => {
    event.preventDefault();

    const newSearch = event.target.elements.search.value;

    const submitSearch = searchPractice(newSearch);
    store.dispatch(submitSearch);
  };

  return (
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
  );
};

export default connect()(Input);
