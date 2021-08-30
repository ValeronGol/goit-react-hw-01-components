import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendList/FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendLlist}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <div key={id}>
          <FriendListItem
            key={id}
            name={name}
            isOnline={isOnline}
            avatar={avatar}
          />
        </div>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
