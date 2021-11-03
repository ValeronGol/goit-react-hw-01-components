import './Profile.css';

type  Stats = {
  followers:number;
  views: number;
  likes: number;
};

interface Props {
  stats: Stats;
  name: string;
  tag: string;
  location: string;
  avatar: string;
}

export const Profile = ({ name, tag, location, stats, avatar }:Props) => {
  return (
    <div className="Profile">
      <div className="Description">
        <img src={avatar} alt="Аватар пользователя" className="Avatar" />
        <p className="Name">{name}</p>
        <p className="Tag">@{tag}</p>
        <p className="Location">{location}</p>
      </div>
      <ul className="Stats">
        <li>
          <span className="Label">Followers</span>
          <span className="Quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="Label">Views</span>
          <span className="Quantity">{stats.views}</span>
        </li>
        <li>
          <span className="Label">Likes</span>
          <span className="Quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

