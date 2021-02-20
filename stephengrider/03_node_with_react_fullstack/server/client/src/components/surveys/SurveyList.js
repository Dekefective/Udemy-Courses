import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div key={survey._id} className="card darken-1">
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">Sent on: {new Date(survey.dateSent).toLocaleDateString}</p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a> 
            <a>No: {survey.no}</a> 
          </div>
        </div>
      )
    })
  }
  render() {
    return(
      <div>SurveyList</div>
    )
  }
};

function mapStateToProps(state) {
  return { surveys: state.surveys}
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);