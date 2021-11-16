import { IUser } from '@/models';
import { IPostBody, ITopicBody, ITopicPost } from '@/modules';
import { BaseAPI } from './base-api';
import { BASE_API } from './const';

class ForumAPI extends BaseAPI {
  getTopics = async (): Promise<IUser> => {
    const data: IUser = await this.http.get('');
    return data;
  };

  getPosts = async (topicId: string): Promise<ITopicPost[]> => {
    const data: ITopicPost[] = await this.http.get('/posts', {
      data: { topicId },
    });
    return data;
  };

  createTopic = async (data: ITopicBody) => {
    await this.http.post('', { data });
  };

  createPost = async (data: IPostBody) => {
    await this.http.post('/posts', { data });
  };
}

export const forumAPI = new ForumAPI(`${BASE_API}/forum`);
