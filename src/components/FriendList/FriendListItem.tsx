import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <div className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};