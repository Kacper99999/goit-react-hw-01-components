import React from 'react';
import Profile from '/src/components/user/Profile';
import user from '/src/components/user/user.json';
import Statistics from '/src/components/data/Statistics';
import data from '/src/components/data/data.json';
import friends from '/src/components/friends/friends.json';
import FriendListItem from '/src/components/friends/FriendListItem';
import TransactionHistory from '/src/components/transations/TransactionHistory';
import transactions from '/src/components/transations/transactions.json';


function App() {
  return (
    <>
      <h1>React Homework Template (Vite)</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendListItem friends={friends} />
      <TransactionHistory items = {transactions} />
    </>
  );
}

export default App;