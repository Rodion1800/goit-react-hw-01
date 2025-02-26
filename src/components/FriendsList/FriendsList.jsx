import FriendsListItem from "./FriendsListItem";
import css from "./FriendsList.module.css";

export default function FriendsList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((friend) => (
        <li className={css.listItem} key={friend.id}>
          <FriendsListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
