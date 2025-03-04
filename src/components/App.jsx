import { useState } from "react";
import "./App.css";
import UserProfile from "./UserProfile/UserProfile";
import UserData from "../UserData.json";
import friends from "../friends.json";
import FriendList from "./FriendList/FriendList";
import transactions from "../transactions.json";
import TransactionList from "./Transactions/TransactionHistory";
console.log(UserData);

export default function App() {
  return (
    <>
      <UserProfile user={UserData} />
      <FriendList friends={friends} />
      <TransactionList items={transactions} />
    </>
  );
}
