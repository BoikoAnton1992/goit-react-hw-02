import css from './Profile.module.css';
import clsx from 'clsx';

export default function Profile({ image, name, tag, location, stats }) {
  return (
    <div className={css.mainContainer}>
      <div className={css.carContainer}>
        <img className={css.avatarContainer} src={image} alt="User avatar" />
        <p className={css.nameText}>{name}</p>
        <p className={css.tagText}>@{tag}</p>
        <p className={css.locationText}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={clsx(css.listTextContainer, css.border)}>
          <span>Followers</span>
          <span className={css.listText}>{stats.followers}</span>
        </li>
        <li className={clsx(css.listTextContainer, css.border)}>
          <span>Views</span>
          <span className={css.listText}>{stats.views}</span>
        </li>
        <li className={css.listTextContainer}>
          <span>Likes</span>
          <span className={css.listText}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
