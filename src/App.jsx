import React from 'react';

import Profile from './components/profile/Profile'
import Statistics from './components/statistics/Statistics'
import FriendList from './components/friendList/FriendList'
import TransactionHistory from './components/transactionHistory/TransactionHistory'
import css from './App.module.css'

const App = () => {
	return (
    <div className={ css.wrapper }>
      <Profile />
      <Statistics />
			<FriendList />
      <TransactionHistory/>
		</div>
	)
}

export default App
