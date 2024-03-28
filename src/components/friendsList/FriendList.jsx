export const FriendList = ({ friends }) => {
  return (
    <section class="statistics">
      <ul class="friends-list">
        {friends.map(friend => (
          <li class="item">
            <span>
              <div
                className={`status ${friend.isOnline ? 'online' : 'offline'}`}
              ></div>
            </span>
            <img
              class="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p class="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
