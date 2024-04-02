import css from './TransactionHistory.module.css';
import clsx from 'clsx';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr
            key={item.id}
            className={clsx(css.tr, {
              [css.trEven]: index % 2 === 0,
              [css.trOdd]: index % 2 !== 0,
            })}
          >
            <td className={css.td}>{item.type}</td>
            <td className={css.td}>{item.amount}</td>
            <td className={css.td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
