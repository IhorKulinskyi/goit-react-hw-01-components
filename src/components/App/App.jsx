import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Profile } from '../profile/Profile';
import { Stats } from 'components/stats/Stats';
import { FriendsList } from 'components/friendsList/FriendsList';
import { Transactions } from 'components/transactions/TransactionsTable';

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
      <Stats stats={data} />
      <FriendsList friends={friends} />
      <Transactions data = {transactions}/>
    </div>
  );
};
