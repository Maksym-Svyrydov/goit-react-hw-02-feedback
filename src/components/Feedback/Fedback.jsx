import React, { Component } from 'react';

export class FedbackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleCounterGoodFeedback = () => {
    this.setState(prevstate => {
      return {
        good: prevstate.good + 1,
      };
    });
  };
  handleCounterNeutralFeedback = () => {
    this.setState(prevstate => {
      return {
        neutral: prevstate.neutral + 1,
      };
    });
  };
  handleCounterBadFeedback = () => {
    this.setState(prevstate => {
      return {
        bad: prevstate.bad + 1,
      };
    });
  };
  // countTotalFeedback = () => {
  //    return {

  //    }
  // }

  render() {
    let countTotalFeedback =
      this.state.good + this.state.bad + this.state.neutral;

    const countPositiveFeedbackPercentage = Math.round(
      0 + (this.state.good / countTotalFeedback) * 100
    );
    //  const countPositiveFeedbackPercentage = () => {
    //    if (countTotalFeedback === 0) {
    //      return 0;
    //    } else {
    //      (this.state.good / countTotalFeedback) * 100;
    //    }
    //  };
    return (
      <div>
        <div>
          <h2>Please leave feedback</h2>
          <button type="button" onClick={this.handleCounterGoodFeedback}>
            Good
          </button>
          <button type="button" onClick={this.handleCounterNeutralFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.handleCounterBadFeedback}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          {countTotalFeedback === 0 ? (
            <p>There are no feedbacks yet, please leave your feedback</p>
          ) : (
            <ul>
              <li>Good: {this.state.good}</li>
              <li>Neutral: {this.state.neutral}</li>
              <li>Bad: {this.state.bad}</li>
              <li>Total: {countTotalFeedback}</li>
              <li>Positive feedback: {countPositiveFeedbackPercentage}%</li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default FedbackForm;
