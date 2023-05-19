import PropTypes from 'prop-types';
import {
  Description,
  ProfileImg,
  Card,
  UserName,
  Tag,
  StatList,
  StatListItem,
} from './Profile.styled';

export const Profile = ({
  userName,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <Card>
      <Description>
        <ProfileImg src={avatar} alt="User avatar" />
        <UserName>{userName}</UserName>
        <Tag>@{tag}</Tag>
        <p>{location}</p>
      </Description>

      <StatList>
        <StatListItem>
          <span>Followers</span>
          <span>{followers}</span>
        </StatListItem>
        <StatListItem>
          <span>Views</span>
          <span>{views}</span>
        </StatListItem>
        <StatListItem>
          <span>Likes</span>
          <span>{likes}</span>
        </StatListItem>
      </StatList>
    </Card>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
