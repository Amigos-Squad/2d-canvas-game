import { IUser } from '@/models';
import { ILoginForm, IRegistrationForm } from '@/modules';
import { BaseAPI } from './base-api';
import { YANDEX_API } from './const';

class AuthAPI extends BaseAPI {
  getUserData(): Promise<IUser> {
    return this.http.get('/user');
  }

  register(data: IRegistrationForm) {
    return this.http.post('/signup', { data });
  }

  login(data: ILoginForm) {
    return this.http.post('/signin', { data });
  }

  logout() {
    return this.http.post('/logout');
  }
}

export const authAPI = new AuthAPI(`${YANDEX_API}/auth'`);
