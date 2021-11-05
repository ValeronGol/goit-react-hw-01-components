import css from './FriendList.module.css';

interface Props {
  isOnline: boolean;
  avatar: string;
  name: string;
}

export const FriendListItem = ({ isOnline, avatar, name }:Props) => {
  return (
    <div className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className="Name">{name}</p>
    </div>
  );
};

