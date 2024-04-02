import { useState } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';

export default function App() {
  const [typesFeedback, setTypesFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    const updatedTypesFeedback = { ...typesFeedback };
    updatedTypesFeedback[feedbackType] += 1;
    setTypesFeedback(updatedTypesFeedback);
  };

  const resetFeedback = () => {
    setTypesFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const { good, neutral, bad } = typesFeedback;

  return (
    <>
      <Description />
      <Options onButton={updateFeedback} reset={resetFeedback} />
      <Feedback good={good} neutral={neutral} bad={bad} />
    </>
  );
}
