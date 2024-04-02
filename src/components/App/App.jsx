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

  const handleChangeFedback = () => {
    setTypesFeedback({
      ...typesFeedback,
      good: 5,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description></Description>
      <Options onButton={handleChangeFedback} />
      <Feedback></Feedback>
    </>
  );
}
