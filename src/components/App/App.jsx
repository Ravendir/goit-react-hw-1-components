import React from "react";
import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import user from "../../assets/profile/user.json";
import data from "../../assets/statistics/data.json";
import friends from "../../assets/friendList/friends.json";
import transactions from "../../assets/transactionHistory/transactions.json";
import "./App.module.css";

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
