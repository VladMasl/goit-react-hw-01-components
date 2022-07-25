const TransactionHistoryItem = ({ type, amount, currency }) => {
    console.log(amount);
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
