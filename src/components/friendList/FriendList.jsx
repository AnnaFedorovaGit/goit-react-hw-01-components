import friends from '../../assets/friends.json'
import FriendListItem from '../FriendListItem/FriendListItem'
import css from './FriendList.module.css'


const FriendList = () => {     
    return (
        <ul className={css.friendList}>
            {friends.map(friend => <FriendListItem friend={ friend } key={ friend.id } />)}
        </ul>
    )
}


export default FriendList