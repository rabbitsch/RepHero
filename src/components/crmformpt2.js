import React from "react";
import { connect } from "react-redux";
import { postData } from "../apiClients";
import { reduxForm, Field } from "redux-form";
import "./crmform.css";

export let CrmFormpt2 = props => {
  //console.log({ props }, "this is my post form props");
  // const extracted = props.crm;

  // if (!extracted) {
  //   return <p>Get Content</p>;
  //   //  console.log(extracted, "this is my extracted form post >>>>>>");
  // }

  return (
    <div>
      <div>
        <form
          className="crmformFacept2"
          onSubmit={props.handleSubmit(data => {
            data.office = props.office.id;

            return postData(data);
          })}
        >
          <div className="crmPost">
            <label className="crmlabel">Date</label>
            <Field name="date" component="input" type="text" label="date" />
          </div>
          <div className="crmPost">
            <label className="crmlabel">Goals</label>
            <Field
              name="goals"
              component="textarea"
              element="textarea"
              label="goals"
            />
          </div>
          <div className="crmPost">
            <label className="crmlabel">Outcome</label>
            <Field
              name="outcome"
              component="textarea"
              element="textarea"
              label="outcome"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

// <div className="crmPost">
//   <label className="crmlabel">NextGoal</label>
//   <Field
//     name="nextgoals"
//     component="textarea"
//     element="textarea"
//     label="nextgoals"
//   />
// </div>

const mapStateToProps = state => {
  return { content: state.reducer.content, crm: state.reducer.crm };
};

const CrmForming = reduxForm({ form: "visitPost" })(CrmFormpt2);
export default connect(mapStateToProps)(CrmForming);
