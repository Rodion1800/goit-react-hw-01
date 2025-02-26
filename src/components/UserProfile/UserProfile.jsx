import css from "./UserProfile.module.css";

export default function UserProfile({ user }) {
  return (
    <div className={css.wrapper}>
      <div>
        <img
          className={css.userImg}
          src={user.avatar}
          alt={user.username}
          width="100"
        />
        <h2>{user.username}</h2>
        <p>@{user.tag}</p>
        <p>{user.location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span> <span>{user.stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span> <span>{user.stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
