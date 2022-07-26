import PropTypes from 'prop-types';
import s from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr className={s.transactionInfoItems}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistoryItem;
