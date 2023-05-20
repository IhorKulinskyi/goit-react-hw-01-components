import PropTypes from 'prop-types';
import { List, ListItem, Chip } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <ListItem key={friend.id}>
          <Chip type={friend.isOnline}></Chip>
          <img src={friend.avatar} alt="User avatar" width="48" />
          <p>{friend.name}</p>
        </ListItem>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
