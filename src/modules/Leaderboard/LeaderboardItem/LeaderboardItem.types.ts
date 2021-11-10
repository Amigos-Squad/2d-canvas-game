export type Props = {
  index: number;
} & ILeaderboardListItem;

export interface ILeaderboardListItem {
  id: number;
  user: string;
  score: number;
  date: string;
}
