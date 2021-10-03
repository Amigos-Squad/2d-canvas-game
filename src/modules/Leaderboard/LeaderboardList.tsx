import React, { ReactElement, useMemo } from 'react';
import { tempLeaderboard } from './const';
import { LeaderboardItem } from './LeaderboardItem';
import './Leaderboard.scss';

export const LeaderboardList = (): ReactElement => {
  const list = useMemo(
    () =>
      tempLeaderboard.map((item) => (
        <LeaderboardItem {...item} key={item.id} />
      )),
    []
  );

  return <tbody className="leaderboard__list">{list}</tbody>;
};
