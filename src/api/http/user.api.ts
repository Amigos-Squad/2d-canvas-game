import { BaseAPI } from './base-api';
import { BASE_API, YANDEX_API } from './const';
import { IBaseUser, IUser } from '@/models';

class UserAPI extends BaseAPI {
  changeProfile = async (data: IUser) => {
    await this.http.put('/profile', { data });
  };

  changeBaseProfile = async (data: IBaseUser) => {
    await this.http.put('/user', { data, baseUrl: BASE_API });
  };

  changeAvatar = async (data: FormData) => {
    await this.http.put('/profile/avatar', { data, isFormData: true });
  };

  changePassword = async (data: {
    oldPassword: string;
    newPassword: string;
  }) => {
    await this.http.put('/password', { data });
  };
}

export const userAPI = new UserAPI(`${YANDEX_API}/user`);
