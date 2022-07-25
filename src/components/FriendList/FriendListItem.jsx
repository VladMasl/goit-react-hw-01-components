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
        fontSize: 20,
        
      }}
    >
      {isOnline === true ? (
        <span
          className="status"
          style={{
            display: 'flex',
            width: '20px',
            height: '20px',
            borderRadius: '50px',
            backgroundColor: 'green',
          }}
        ></span>
      ) : (
        <span
          className="status"
          style={{
            display: 'flex',
            width: '20px',
            height: '20px',
            borderRadius: '50px',
            backgroundColor: 'red',
          }}
        ></span>
      )}

      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
