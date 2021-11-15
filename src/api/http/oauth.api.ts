import { HOME_URL } from '.';
import { BaseAPI } from './base-api';
import { YANDEX_API } from './const';

class OauthAPI extends BaseAPI {
  getServiceId = async () => this.http.get('/service-id');

  signIn = async (code: string) =>
    this.http.post('', {
      data: {
        code,
        redirect_uri: HOME_URL,
      },
    });
}

export const oauthAPI = new OauthAPI(`${YANDEX_API}/oauth/yandex`);
