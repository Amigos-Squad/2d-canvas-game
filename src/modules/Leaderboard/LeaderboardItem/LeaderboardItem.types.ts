export type Props = {} & ILeaderboardListItem;

export interface ILeaderboardListItem {
  id: number;
  position: number;
  user: string;
  score: number;
  days: number;
  citizens: number;
  date: string;
}
