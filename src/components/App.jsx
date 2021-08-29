import { ProfileList } from 'components/Profile/ProfileList';
import { Statistics } from './Statistics/Statistics';
import user from '../user.json';
import statisticalData from '../statistical-data.json';

export default function App() {
  return (
    <div>
      <ProfileList user={user} />
      <Statistics title="Upload stats" stats={statisticalData} />;
    </div>
  );
}
