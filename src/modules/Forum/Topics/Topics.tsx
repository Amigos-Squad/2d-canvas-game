import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TopicsHeader } from './TopicsHeader';
import { Store } from '@/redux/store.type';
import { getTopics } from '@/redux';
import { TopicItem } from './TopicItem';
import './Topics.scss';

export const Topics = (): ReactElement => {
  const dispatch = useDispatch();
  const { topics } = useSelector((store: Store) => store.forumState);

  useEffect(() => {
    dispatch(getTopics());
  }, []);

  return (
    <div className="scroll__wrapper">
      <table className="forum-topics">
        <TopicsHeader />
        <tbody className="forum-topics__body">
          {topics.map((item) => (
            <TopicItem {...item} key={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
