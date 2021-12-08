import Statistic from "./StatisticsItem/StatisticsItem";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const StatisticsList = ({ stats, title }) => (
  <section className={styles.statisticSection}>
    {title && <h2 className={styles.statisticTitle}>{title}</h2>}

    <ul className={styles.statisticContainer}>
      {stats.map((stat) => (
        <Statistic key={stat.id} {...stat} />
      ))}
    </ul>
  </section>
);

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};
export default StatisticsList;
