import React, { ReactElement } from 'react';
import { Props } from './LeaderboardItem.types';
import { parsePosition } from './utils';

export const LeaderboardItem = (props: Props): ReactElement => (
  <tr className="leaderboard__list-item">
    <td>{parsePosition(props.position)}</td>
    <td>{props.user}</td>
    <td>{props.score}</td>
    <td>{props.days}</td>
    <td>{props.citizens}</td>
    <td>{props.date}</td>
  </tr>
);
