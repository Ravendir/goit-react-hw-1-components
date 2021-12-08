import styles from "../FriendList.module.css";
import PropTypes from "prop-types";

const Friends = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={styles.friendsList} key={id}>
      <span className={isOnline ? styles.online : styles.offline}>
        {isOnline}
      </span>
      <img className={styles.friendsAvatar} src={avatar} alt={name} />
      <p className={styles.friendsName}>{name}</p>
    </li>
  );
};

Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Friends;
