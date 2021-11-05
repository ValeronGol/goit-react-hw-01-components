import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

type  Friends = {
  id: number;
  isOnline: boolean;
  avatar: string;
  name: string;
};

interface Props {
  friends: Friends[];
}

export const FriendList = ({ friends }:Props) => {
  return (
    <ul className={css.friendLlist}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id}>
          <FriendListItem name={name} isOnline={isOnline} avatar={avatar} />
        </li>
      ))}
    </ul>
  );
};

