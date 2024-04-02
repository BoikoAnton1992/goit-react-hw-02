import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import userData from '../../data/userData.json';
import friendListData from '../../data/friedListData.json';
import transactionData from '../../data/transactionData.json';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendListData} />
      <TransactionHistory items={transactionData} />
    </>
  );
}
