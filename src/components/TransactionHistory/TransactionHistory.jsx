import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';
import s from './TransactionHistory.module.css';
const TransactionHistory = props => {
  const { items } = props;
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.optionList}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={s.transactionInfoList}>
        {items.map(el => (
          <TransactionHistoryItem key={el.id} {...el} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
