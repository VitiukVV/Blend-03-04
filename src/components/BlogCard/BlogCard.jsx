import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  DateEl,
} from './BlogCard.styled';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

export const BlogCard = ({
  poster,
  tag,
  title,
  description,
  name,
  avatar,
  postedAt,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt={name} />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={name} />
          <UserInfo>
            <UserName>{name}</UserName>
            <DateEl>
              {formatDistanceToNow(new Date(postedAt), { addSuffix: true })}
            </DateEl>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};

BlogCard.propTypes = {
  poster: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
};
