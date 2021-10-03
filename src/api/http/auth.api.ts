import { IUser } from '@/models';
import { ILoginForm, IRegistrationForm } from '@/modules';
import { BaseAPI } from './base-api';
import { YANDEX_API } from './const';

class AuthAPI extends BaseAPI {
  loadUser = async (): Promise<IUser> => {
    const data: IUser = await this.http.get('/user');
    return data;
  };

  register = async (data: IRegistrationForm) => {
    await this.http.post('/signup', { data });
  };

  login = async (data: ILoginForm) => {
    await this.http.post('/signin', { data });
  };

  logout = async () => {
    await this.http.post('/logout');
  };
}

export const authAPI = new AuthAPI(`${YANDEX_API}/auth`);
