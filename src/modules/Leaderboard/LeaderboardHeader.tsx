import React, { ReactElement } from 'react';

export const LeaderboardHeader = (): ReactElement => (
  <thead>
    <tr className="leaderboard__header">
      <th className="leaderboard__header_position">POSITION</th>
      <th>CHALLENGER</th>
      <th>SCORE</th>
      <th>DAYS</th>
      <th>CITIZENS</th>
      <th>DATE</th>
    </tr>
  </thead>
);
