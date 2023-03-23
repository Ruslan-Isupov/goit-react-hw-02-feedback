import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';


export class MyClassComponent extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrement = e => {
    this.setState(prevState => {
      if (e.target.id === 'good') {
        return { good: prevState.good + 1 };
      } else if (e.target.id === 'neutral') {
        return { neutral: prevState.neutral + 1 };
      } else if (e.target.id === 'bad') {
        return { bad: prevState.bad + 1 };
      }
    });
  };
  countTotalFeedback = () => {
    
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    
    return Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  };
  render() {
    const {good,neutral,bad} = this.state

    const totalFeedback = this.countTotalFeedback();
    
    const positivePercentage = this.countPositiveFeedbackPercentage();
    
    return (
      <Section title="Please Leave Feedback">
        <FeedbackOptions
          

          onLeaveFeedback={this.handleIncrement}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      </Section>
    );
  }
}
