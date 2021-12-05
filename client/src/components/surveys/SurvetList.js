import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey, sortSurveys } from '../../actions';
import './Survey.css';
import M from 'materialize-css';
import SearchForm from './form/SearchForm';
import SurveyCardLists from './form/SurveyCardLists';

class SurvetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad: true,
      search: ''
    };
  }
  async componentDidMount() {
    M.AutoInit();
    await this.props.fetchSurveys();

    this.setState({ isLoad: false });
  }

  componentDidUpdate() {
    M.AutoInit();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.sortSurveys(this.state.search);
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  renderContent() {
    return (
      <div className="row">
        <div className="col s12 m4">
          <SearchForm
            handleChange={this.handleChange}
            search={this.state.search}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div className="col s12 m8">
          <SurveyCardLists
            surveys={this.props.surveys}
            deleteSurvey={this.props.deleteSurvey}
          />
        </div>
      </div>
    );
  }

  renderPreload() {
    return (
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
    );
  }
  render() {
    return (
      <>
        <div style={{ margin: '3rem 0', paddingLeft: '2rem' }}>
          <h5>SurveyList</h5>
          <div className="divider m3"></div>
        </div>

        {this.state.isLoad ? this.renderPreload() : this.renderContent()}
      </>
    );
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(mapStateToProps, {
  fetchSurveys,
  deleteSurvey,
  sortSurveys
})(SurvetList);
