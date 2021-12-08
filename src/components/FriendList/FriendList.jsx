import Friends from "./FriendListItem/FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => (
  <ul>
    {friends.map((friend) => (
      <Friends key={friend.id} {...friend} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
FriendList.defaultProps = {
  avatar: "https://image.flaticon.com/icons/png/512/42/42901.png",
};

export default FriendList;
