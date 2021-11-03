import  './FriendList.css';

interface Props {
  isOnline: boolean;
  avatar: string;
  name: string;
}

export const FriendListItem = ({ isOnline, avatar, name }:Props) => {
  return (
    <div className="Item">
      <span className={isOnline ? "Online ": "Offline"}></span>
      <img className="Avatar" src={avatar} alt={name} width="48" />
      <p className="Name">{name}</p>
    </div>
  );
};

