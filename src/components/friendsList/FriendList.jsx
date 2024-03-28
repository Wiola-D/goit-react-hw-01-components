export const FriendList = ({ friends }) => {
  return (
    <section className="friends">
      <ul className="friends-list">
        {friends.map(friend => (
          <li key={friend.id} className="item">
            <span>
              <div
                className={`status ${friend.isOnline ? 'online' : 'offline'}`}
              ></div>
            </span>
            <img
              className="friend-avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
