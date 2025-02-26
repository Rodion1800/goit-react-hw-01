import css from "./FriendsListItem.module.css";
import clsx from "clsx";

export default function FriendsListItem({
  friend: { name, isOnline, avatar },
}) {
  const statusClsx = clsx(isOnline ? css.Online : css.Offline);
  return (
    <div className={css.wrapper}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={statusClsx}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
