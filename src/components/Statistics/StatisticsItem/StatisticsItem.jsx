import styles from "../Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ label, percentage }) => {
  function randomColor() {
    return `rgb(
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)})
      `;
  }
  return (
    <li
      className={styles.statisticList}
      style={{ backgroundColor: randomColor(), opacity: 0.5 }}
    >
      <span className={styles.statisticLabel}>{label}</span>
      <span className={styles.statisticPercentage}>{percentage}%</span>
    </li>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
