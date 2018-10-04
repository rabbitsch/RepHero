import React from 'react';
import {reduxForm, Field} from 'redux-form';

export class CrmForm extends React.Component{
  // onSubmit(value){
  //   return fetch('/api/prac',{
  //     method: 'POST',
  //     body: JSON.Stringify(value),
  //     headers:{
  //       'Content-Type': 'application/JSON'
  //     },
  //
  //   })
  //   .then(res => {
  //     if(
  //       res.headers.has('Content-Type')
  //     )
  //   })

  render(){
    return(
      <form>
        <Field name="officename" type="text" label="officename" />
        <Field name="date" type="text"  label="date"/>
        <Field name="decisionmaker" type="text"  label="decisionmaker" />
        <Field name="goals" element="textarea"  label="goals"/>
        <Field name="outcome" element="textarea"  label="outcome" />
        <Field name="nextgoal" element="textarea"  label="nextgoal" />
        <button type="submit">Submit</button>
      </form>
    )
  }

}

export default reduxForm({
    form: 'contact'
    // onSubmitFail: (errors, dispatch) =>
        // dispatch(f('contact', Object.keys(errors)[0]))
})(CrmForm);
