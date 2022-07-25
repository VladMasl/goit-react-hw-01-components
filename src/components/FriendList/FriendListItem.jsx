const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li
      className="item"
      style={{
        height: '100px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: 'red',
      }}
    >
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
