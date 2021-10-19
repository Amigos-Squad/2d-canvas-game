import React, { ReactElement, useMemo } from 'react';
import type { ITopicItem } from './Topics.types';
import { TopicItem } from './TopicItem';
import { TopicsHeader } from './TopicsHeader';
import './Topics.scss';

type Props = {
  topics: ITopicItem[];
};

export const Topics = ({ topics }: Props): ReactElement => {
  const topicsList = useMemo(
    () => topics.map((item) => <TopicItem {...item} key={item.id} />),
    [topics]
  );

  return (
    <div className="scroll__wrapper">
      <table className="forum-topics">
        <TopicsHeader />
        <tbody className="forum-topics__body">{topicsList}</tbody>
      </table>
    </div>
  );
};
