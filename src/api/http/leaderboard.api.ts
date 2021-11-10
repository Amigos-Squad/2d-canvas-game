import { ILeaderboardListItem } from '@/modules';
import { BaseAPI } from './base-api';
import { YANDEX_API } from './const';

const TEAM_NAME = 'acapulco';

class LeaderboardAPI extends BaseAPI {
  pullAll = async (
    sortField: keyof ILeaderboardListItem
  ): Promise<ILeaderboardListItem[]> => {
    const data: ILeaderboardListItem[] = await this.http.post(`/${TEAM_NAME}`, {
      data: {
        ratingFieldName: sortField,
        cursor: 0,
        limit: 100,
      },
    });
    return data;
  };

  add = async (data: unknown) => {
    await this.http.post('', { data });
  };
}

export const leaderboardAPI = new LeaderboardAPI(`${YANDEX_API}/leaderboard`);
