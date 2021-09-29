import React, { ReactElement } from 'react';
import { AvatarIcon } from '@/components/Icons/SVG/Avatar';
import { Props } from './InsideTopic.types';

export const InsideTopicItem = React.memo(
    (props: Props): ReactElement => <div className="inside-topic__item">
        <div className="inside-topic__item-avatar">
            {props.avatar ? <img src={props.avatar} alt="Avatar"/> : <AvatarIcon/>}
        </div>
        <div className="inside-topic__item-container">
            <div className="inside-topic__item-author">{props.author}</div>
            <div className="inside-topic__item-text">{props.text}</div>
        </div>
        <div className="inside-topic__item-time">{props.time}</div>
    </div>);
