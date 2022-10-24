import { Component } from "react";
import { Box } from "../constans";
import FeedBack from "./FeedBackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const allFeedback = this.countTotalFeedback();
    let result = 0;
    if (allFeedback > 0) {
      result = Math.round((good * 100) / allFeedback);
    }
    return result;
  };

  feedbaclLeaveClick = (event) => {
    const feedbackCount = event.target.name;

    this.setState((prevState) => ({
      [feedbackCount]: prevState[feedbackCount] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const btnName = Object.keys(this.state);
    const feedbackTotal = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <Box as="main">
        <Box as="section" display="flex" justifyContent="center" py={5}>
          <FeedBack
            title={"Please leave feedback"}
            btnName={btnName}
            onLeaveFeedback={this.feedbaclLeaveClick}
          />
        </Box>
        <Box as="section" display="flex" justifyContent="center" py={4}>
          {feedbackTotal === 0 ? (
            <Notification message={"There is no feedback"} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={feedbackTotal}
              positivePercentage={positiveFeedback}
            />
          )}
        </Box>
      </Box>
    );
  }
}
