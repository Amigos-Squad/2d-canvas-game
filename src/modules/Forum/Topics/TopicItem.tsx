import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/utils';
import { Icon, ICONS } from '@/components';
import { ITopicItem } from '../Forum.types';

type Props = {} & ITopicItem;

export const TopicItem = ({
  title,
  posts,
  author,
  createdAt,
  isLocked,
  id,
}: Props): ReactElement => (
  <tr className="forum-topics__topic">
    <td>
      <Icon
        className="topic__icon"
        name={isLocked ? ICONS.EnvelopeLock : ICONS.Envelope}
      />
    </td>
    <td className="topic__link">
      <NavLink
        to={{
          pathname: `${ROUTES.FORUM_TOPIC_PATH}${id}`,
          state: { title },
        }}
      >
        {title}
      </NavLink>
    </td>
    <td>{posts}</td>
    <td>{author}</td>
    <td>{createdAt}</td>
  </tr>
);
