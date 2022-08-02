import Profile from 'components/Profile/Profile';
import user from '../data/user.json';
import Statistics from 'components/Statistics/Statistics';
import data from '../data/data.json';
import FriendsList from './Friends/FriendsList';
import friends from '../data/friends.json'



function App() {
  return (
    <>
    <Profile
  name={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
    <Statistics title="UPLOAD STATS" stats={data} />
    <Statistics stats={data} />
    <FriendsList friends={friends} />;
    </>
   
  );
};


export default App;