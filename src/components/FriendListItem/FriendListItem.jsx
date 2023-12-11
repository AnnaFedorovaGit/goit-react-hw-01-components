import css from './FriendListItem.module.css'


const FriendListItem = ({ friend }) => { 
    return (
        <li className={css.item}>
            <span className={` ${css.status} ${friend.isOnline ? css.green : css.red }`} ></span>
            <img className={ css.avatar } src={ friend.avatar } alt="User avatar" width="48" />
            <p className={ css.name }>{ friend.name }</p>
        </li>
    )
}


export default FriendListItem