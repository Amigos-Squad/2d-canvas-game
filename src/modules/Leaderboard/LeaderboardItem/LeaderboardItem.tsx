import React, { ReactElement } from 'react';
import { Props } from './LeaderboardItem.types';
import { parsePosition } from './utils';

export const LeaderboardItem = (props: Props): ReactElement => (
  <tr className="leaderboard__list-item">
    <td>{parsePosition(props.index)}</td>
    <td>{props.user}</td>
    <td>{props.score}</td>
    <td>{props.date}</td>
  </tr>
);
