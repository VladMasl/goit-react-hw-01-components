import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      {isOnline ? (
        <span
          className={s.status}
          style={{
            backgroundColor: 'green',
          }}
        ></span>
      ) : (
        <span
          className={s.status}
          style={{
            backgroundColor: 'red',
          }}
        ></span>
      )}

      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
