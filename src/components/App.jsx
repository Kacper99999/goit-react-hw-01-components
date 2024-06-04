import React from 'react';
import Profile from '/src/components/Profile';
import user from '/src/user.json';
import Statistics from '/src/components/Statistics';
import data from '/src/data.json';
import friends from '/src/friends.json';
import FriendListItem from '/src/components/FriendListItem';
import TransactionHistory from '/src/components/TransactionHistory';
import transactions from '/src/transactions.json';


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