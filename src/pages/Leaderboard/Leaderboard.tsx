import React, { ReactElement, memo } from 'react';
import { LeaderboardHeader, LeaderboardList, Page } from '@/modules';
import './Leaderboard.scss';

export const Leaderboard = memo(
  (): ReactElement => (
    <Page withHeader>
      <div className="leaderboard">
        <div className="leaderboard__container">
          <table className="leaderboard__table">
            <LeaderboardHeader />
            <LeaderboardList />
          </table>
        </div>
        <div className="leaderboard__footer"> </div>
      </div>
    </Page>
  )
);
