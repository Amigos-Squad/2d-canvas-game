import React, { memo, ReactElement } from 'react';
import { TopicItem } from '../TopicItem';
import {TopicsHeader} from './TopicsHeader';
import { NewTopic } from '../NewTopic';
import { tempTopics } from './const';
import { Props } from './Topics.types';

import './Topics.scss';

export const Topics = memo(
  (props: Props): ReactElement => (
    <div className="topics">
        <TopicsHeader />
      <div className="topics-container">
          { tempTopics.map((item) => <TopicItem {...item} key={item.id}/>) }
          {props.showNewTopic && <NewTopic/>}
      </div>
    </div>
  )
);
