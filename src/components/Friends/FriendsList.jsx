import PropTypes from 'prop-types';

import styles from './Friends.module.css';

import FriendsListItem from './FriendsListItem/FriendListItem';

function FriendsList(friends) {
    return (
        <ul class={styles['friends-list']}>
            {friends.friends.map(({ avatar, name, isOnline, id }) => (
                <FriendsListItem
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                key={id}
                />
            ))}
        </ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendsList;