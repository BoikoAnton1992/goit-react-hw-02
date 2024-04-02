import css from './Feedback.module.css';

export default function Feedback({ good = 0, neuutral = 0, bad = 0 }) {
  return (
    <div className={css.mainContainer}>
      <p>Good: {good}</p>
      <p>Neutral: {neuutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
}
