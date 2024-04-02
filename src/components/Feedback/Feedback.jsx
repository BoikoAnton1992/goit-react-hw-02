import css from './Feedback.module.css';

export default function Feedback({ good, neutral, bad, total }) {
  return (
    <div className={css.mainContainer}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
    </div>
  );
}
