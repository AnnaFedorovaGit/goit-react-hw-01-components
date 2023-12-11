import React from 'react';

import Profile from './components/Profile/Profile'
import Statistics from './components/Statistics/Statistics'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
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
