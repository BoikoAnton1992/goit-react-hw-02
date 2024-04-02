import css from './Feedback.module.css';

export default function Feedback({ good, neutral, bad }) {
  return (
    <div className={css.mainContainer}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
}
