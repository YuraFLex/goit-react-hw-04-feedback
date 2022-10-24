import { useState } from 'react';
import { Box } from '../constans';
import FeedBack from './FeedBackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const allFeedback = countTotalFeedback();
    let result = 0;
    if (allFeedback > 0) {
      result = Math.round((good * 100) / allFeedback);
    }
    return result;
  };

  const feedbaclLeaveClick = event => {
    const option = event.target.name;

    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const btnName = ['good', 'neutral', 'bad'];
  const feedbackTotal = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();
  return (
    <Box as="main">
      <Box as="section" display="flex" justifyContent="center" py={5}>
        <FeedBack
          title={'Please leave feedback'}
          btnName={btnName}
          onLeaveFeedback={feedbaclLeaveClick}
        />
      </Box>
      <Box as="section" display="flex" justifyContent="center" py={4}>
        {feedbackTotal === 0 ? (
          <Notification message={'There is no feedback'} />
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
};
