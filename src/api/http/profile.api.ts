import { BaseAPI } from './base-api';
import { YANDEX_API } from './const';
import { IUser, IOptions } from '@/models';

class ProfileAPI extends BaseAPI {
  changeProfile(data: IUser) {
    return this.http.put('/profile', { data });
  }

  changeAvatar(data: IOptions) {
    return this.http.put('/profile/avatar', { data });
  }

  changePassword(data: IOptions) {
    return this.http.put('/password', { data });
  }
}

export const profileAPI = new ProfileAPI(`${YANDEX_API}/user'`);
