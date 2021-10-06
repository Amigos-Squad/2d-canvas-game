import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { ITopicItem } from './Topics.types';
import { ROUTES } from '@/utils';
import { Icon, ICONS } from '@/components';

type Props = {} & ITopicItem;

export const TopicItem = ({
  title,
  posts,
  starter,
  lastMessage,
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
      <NavLink to={`${ROUTES.FORUM_TOPIC_PATH}${id}`}>{title}</NavLink>
    </td>
    <td>{posts}</td>
    <td>{starter}</td>
    <td>{lastMessage}</td>
  </tr>
);
