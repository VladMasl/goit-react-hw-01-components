import FriendListItem from '../FriendListItem/FriendListItem';
import s from '../FriendList/FriendList.module.css';
const FriendList = props => {
  const { friends } = props;
  return (
    <ul className={s.friendList}>
      {friends.map(el => (
        <FriendListItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default FriendList;
