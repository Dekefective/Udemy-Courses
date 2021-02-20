import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';
import formFields from './formFields';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
        {/* <input disabled>{formValues[name]}</input> */}
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries:</h5>
      {reviewFields}
      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancel}
      >
        Cancel
      </button>
      <button 
        onClick={() => submitSurvey(formValues, history)} 
        className="green btn-flat right white-text"
      > 
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  )
}

// adds props from redux to the component
function mapStateToProps(state) {
  console.log({state})
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));