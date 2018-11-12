import React from "react";
import "../grid.css";
import "./crmform.css";

export const Visit = props => (
  <div className="crmList">
    <h3>Date of visit: {props.date}</h3>
    <p>Goals for visit: {props.goals}</p>
    <p>Outcome: {props.outcome}</p>
    <button onClick={ev => props.onUpdate(props.id)}>Update</button>
    <button onClick={ev => props.onDelete(props.id)}>Delete</button>
  </div>
);

export default Visit;
