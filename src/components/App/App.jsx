import user from 'data/user.json';
import { Profile } from '../profile/Profile';
import { Stats } from 'components/stats/Stats';

export const App = () => {
  return (
    <div>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Stats/>
    </div>
  );
};
