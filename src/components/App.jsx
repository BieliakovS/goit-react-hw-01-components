import { Profile } from './profile/profile';
import user from '../user.json';
import { Statistics } from './statistics/statistics';
import data from '../data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../friends.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
