import React, { ReactElement } from 'react';
import { TopicOpenIcon } from '@/components/Icons/SVG/TopicOpen';
import { TopicClosedIcon } from '@/components/Icons/SVG/TopicClosed';
import { NavLink } from 'react-router-dom';
import { Props } from './TopicItem.types';

export const TopicItem = (props: Props): ReactElement => (
  <NavLink to="/topic" className="topic-item">
    <div className="topic-item__statusIcon">
        { props.isLocked ? <TopicClosedIcon/> : <TopicOpenIcon/> }
    </div>
    <div className="topic-item__title">
        { props.title }
    </div>
    <div className="topic-item__posts">{ props.posts }</div>
    <div className="topic-item__starter">{ props.starter }</div>
    <div className="topic-item__lastMessage">{ props.last_message }</div>
  </NavLink>
);
