import { ProfileList } from 'components/Profile/ProfileList';
import user from '../user.json';

export default function App() {
  return (
    <div>
      <ProfileList user={user} />
    </div>
  );
}
