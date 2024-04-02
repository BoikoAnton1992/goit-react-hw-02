import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ friend }) {
  return (
    <li>
      <div className={css.avatarContainer}>
        <img src={friend.avatar} alt={friend.name} width="48" />
        <p className={css.friendName}>{friend.name}</p>
        <p
          className={clsx(css.status, {
            [css.online]: friend.isOnline,
            [css.offline]: !friend.isOnline,
          })}
        >
          {friend.isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </li>
  );
}
