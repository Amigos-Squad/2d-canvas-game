import { HOME_URL } from '@/api/http/const';

export function getYandexAuthLink(serviceId: string): string {
  return `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceId}&redirect_uri=${HOME_URL}`;
}
