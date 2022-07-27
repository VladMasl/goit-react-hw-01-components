import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
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

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
