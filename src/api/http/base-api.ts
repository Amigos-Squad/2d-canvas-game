import { HttpTransport } from '@/utils';

export class BaseAPI {
  http: HttpTransport;

  constructor(base: string) {
    this.http = new HttpTransport(base);
  }
}
