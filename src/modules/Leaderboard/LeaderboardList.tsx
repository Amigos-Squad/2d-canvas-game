import React, { ReactElement, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LeaderboardItem } from './LeaderboardItem';
import './Leaderboard.scss';
import { Store } from '@/redux/store.type';
import { pullLeaderboard } from '@/redux';

export const LeaderboardList = (): ReactElement => {
  const dispatch = useDispatch();
  const { leaderboard } = useSelector((store: Store) => store.globalState);

  useEffect(() => {
    dispatch(pullLeaderboard('score'));
  }, []);

  const list = useMemo(
    () =>
      leaderboard.map((item, index) => (
        <LeaderboardItem {...item} index={index + 1} key={item.id} />
      )),
    [leaderboard]
  );

  return <tbody className="leaderboard__list">{list}</tbody>;
};
