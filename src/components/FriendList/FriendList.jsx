import FriendListItem from './FriendListItem';

const FriendList = props => {
  const { friends } = props;
  return (
    <ul className="friend-list">
      {friends.map(el => (
        <FriendListItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default FriendList;
