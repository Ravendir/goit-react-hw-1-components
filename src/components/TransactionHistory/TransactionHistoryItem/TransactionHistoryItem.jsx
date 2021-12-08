import styles from "../TransactionHistory.module.css";
import PropTypes from "prop-types";

const Transactions = ({ currency, amount, type, id }) => {
  return (
    <tbody>
      <tr key={id} className={styles.transactionHystoryTable}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};

Transactions.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Transactions;
