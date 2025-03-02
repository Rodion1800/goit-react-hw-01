import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({
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
