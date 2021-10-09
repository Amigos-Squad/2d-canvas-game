import { BaseAPI } from './base-api';
import { YANDEX_API } from './const';
import { IUser } from '@/models';

class UserAPI extends BaseAPI {
  changeProfile = (data: IUser) => this.http.put('/profile', { data });

  changeAvatar = (data: FormData) => this.http.put('/profile/avatar', { data });

  changePassword = (data: { oldPassword: string; newPassword: string }) =>
    this.http.put('/password', { data });
}

export const userAPI = new UserAPI(`${YANDEX_API}/user`);
