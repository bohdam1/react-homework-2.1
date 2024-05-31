import React, { Component } from "react";
import { Button } from "components/buttons/buttons"
import{Statistic} from "components/Statistics/statistics"
import{Section} from "components/Section/section";
import {Notification} from "components/Statistics/Notification"

export class Feedback extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  handleChange = (event) => {
    const name = event.target.name;
    this.setState((prevState) => ({
    [name]: prevState[name] + 1
    }));
  };

  countTotalFeedback = ()=>{
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const { good } = this.state;
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  }
 
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <Button handleChange={this.handleChange} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback()> 0 ? <Statistic 
            onTotal={this.countTotalFeedback()} 
            onPositivefeednack={this.countPositiveFeedbackPercentage()} 
            good={good} 
            neutral={neutral} 
            bad={bad}
          /> : <Notification message="There is no feedback" />
          }

          
        </Section>
      </>
    );
  }
  
  
}


