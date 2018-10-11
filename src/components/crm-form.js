import React from "react";
import { reduxForm, Field } from "redux-form";

// export class CrmForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state ={test:[], loading:false}
//   }
export let CrmForm = () => {
  return (
    <form>
      <div>
        <label>Office Name</label>
        <Field
          name="officename"
          component="forminput"
          type="text"
          label="officename"
        />
      </div>
      <div>
        <label>Date</label>
        <Field name="date" component="forminput" type="text" label="date" />
      </div>
      <div>
        <label>Goals</label>
        <Field
          name="goals"
          component="forminput"
          element="textarea"
          label="goals"
        />
      </div>
      <div>
        <label>Outcome</label>
        <Field
          name="outcome"
          component="forminput"
          element="textarea"
          label="outcome"
        />
      </div>
      <div>
        <label>NextGoal</label>
        <Field
          name="nextgoal"
          component="forminput"
          element="textarea"
          label="nextgoal"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({ form: "contact" })(CrmForm);
