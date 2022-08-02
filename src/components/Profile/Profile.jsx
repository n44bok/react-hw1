import PropTypes from 'prop-types';
import styles from './Profile.module.css';


function Profile({ name, tag, location, avatar, stats }) {
    const { followers, views, likes } = stats;
    return (
        <div className={styles['profile']}>
            <div className={styles['description']}>
    <img
      src={avatar}
      alt={name}
      className={styles['avatar']}
    />
    <p className={styles['name']}>{name}</p>
    <p className={styles['tag']}>@{tag}</p>
    <p className={styles['location']}>{location}</p>
  </div>

  <ul className={styles['stats']}>
    <li>
      <span className={styles['label']}>Followers</span> <br />
      <span className={styles['quantity']}>{followers}</span>
    </li>
    <li>
      <span className={styles['label']}>Views</span> <br />
      <span className={styles['quantity']}>{views}</span>
    </li>
    <li>
      <span className={styles['label']}>Likes</span> <br />
      <span className={styles['quantity']}>{likes}</span>
    </li>
  </ul>
</div>
    )
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
};





export default Profile;