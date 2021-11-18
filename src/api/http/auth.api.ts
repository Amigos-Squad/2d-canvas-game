import { IUser } from '@/models';
import { ILoginForm, IRegistrationForm } from '@/modules';
import { BaseAPI } from './base-api';
import { BASE_API, YANDEX_API } from './const';

class AuthAPI extends BaseAPI {
  loadUser = async (): Promise<IUser> => {
    const data: IUser = await this.http.get('/user');
    return data;
  };

  loadBaseUser = async (data: IUser): Promise<{ theme: string }> => {
    const { displayName, login, id, avatar } = data;
    const response: { theme: string } = await this.http.post('/user', {
      data: {
        name: displayName ?? login,
        id,
        avatar,
      },
      baseUrl: BASE_API,
    });

    return response;
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

  toggleTheme = async () => {
    // await this.http.put('/theme');
  };

  loadTheme = async () => {
    // const data: string = await this.http.get('/theme');
    // return data;
    return 'Dark';
  };
}

export const authAPI = new AuthAPI(`${YANDEX_API}/auth`);
