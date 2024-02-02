import React, { Component } from 'react';
import Questionnaire from './Questionnaire';
import ProgressBar from './ProgressBar';
import * as API from '../utils/api';

export default class App extends Component {
  state = {
    questions: [],
  };

  componentDidMount() {
    API.fetchQuesions(5).then(questions => this.setState({ questions }));
  }

  render() {
    const { questions } = this.state;

    return questions.length > 0 ? (
      <Questionnaire questions={questions} />
    ) : (
      <ProgressBar />
    );
  }
}
