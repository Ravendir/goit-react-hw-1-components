import Transaction from "./TransactionHistoryItem/TransactionHistoryItem";
import styles from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHystory = ({ items }) => (
  <table className={styles.transactionTable}>
    <thead className={styles.transactionThead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    {items.map((item) => (
      <Transaction key={item.id} {...item} />
    ))}
  </table>
);

TransactionHystory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHystory;
