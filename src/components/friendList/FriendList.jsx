import friends from '../../assets/friends.json'
import css from './FriendList.module.css'

const FriendList = () => { 
    
    const List = ({ friends }) => { 
        return friends.map(friend => (
            <li className={ css.item } key={ friend.id }>
                <span className={` ${css.status} ${friend.isOnline ? css.green : css.red }`} ></span>
                <img className={ css.avatar } src={ friend.avatar } alt="User avatar" width="48" />
                <p className={ css.name }>{ friend.name }</p>
            </li>
        ))
    }

    return <ul className={ css.friendList }>
        <List friends={ friends }/>    
    </ul>
}

export default FriendList