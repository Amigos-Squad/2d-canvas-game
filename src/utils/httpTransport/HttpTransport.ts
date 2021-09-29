import { METHODS } from './const';
import { IRequestOptions, IFetchRequestOptions, IRequestConfig, ICommonResponse } from './HttpTransport.types';

function parseObject(obj: Record<string, any>) {
  return Object.entries(obj).reduce((acc: string, [key, value]: [string, any]) => {
    if (typeof value !== 'object') {
      acc += `&${key}=${value}`;
    } else if (Array.isArray(value)) {
      acc += `&${key}=${value.join(',')}`;
    } else if (typeof value === 'object' && value !== null) {
      acc += `${parseObject(value)}`;
    }

    return acc;
  }, '');
}

function queryStringify(data: string | Record<string, any>) {
  if (typeof data === 'string') {
    if (data.startsWith('?')) {
      return data;
    }
    return `? + ${data}`;
  }

  const query = parseObject(data);

  if (query.length) {
    return `?${query.substring(1)}`;
  }

  return '';
}

export class HttpTransport {
  baseURL: string;

  constructor(base: string) {
    this.baseURL = base;
  }

  get = <T>(url: string, options: IRequestOptions = {}): Promise<T> => {
    let currentUrl = url;

    if (options.data) {
      currentUrl = url + queryStringify(options.data);
    }

    return this.request(currentUrl, { ...options, method: METHODS.GET });
  };

  put<T>(url: string, options: IRequestOptions = {}): Promise<T> {
    return this.request(url, { ...options, method: METHODS.PUT });
  }

  post<T>(url: string, options: IRequestOptions = {}): Promise<T> {
    return this.request(url, { ...options, method: METHODS.POST });
  }

  delete<T>(url: string, options: IRequestOptions = {}): Promise<T> {
    return this.request(url, { ...options, method: METHODS.DELETE });
  }

  request = async <T>(url: string, options: IFetchRequestOptions): Promise<T> => {
    let fullUrl = this.baseURL + url;
    const { isFormData, headers, data } = options;

    const reqHeaders = isFormData
      ? {}
      : {
          'Content-Type': 'application/json',
          ...headers,
        };

    const requestConfig: IRequestConfig = {
      method: options.method,
      credentials: 'include',
      mode: 'cors',
      headers: reqHeaders,
    };

    if (options.method === METHODS.GET && data) {
      fullUrl += data;
    } else if (isFormData) {
      requestConfig.body = data;
    } else if (options.method !== METHODS.GET) {
      requestConfig.body = JSON.stringify(data);
    }

    const request = await fetch(fullUrl, requestConfig);
    // console.log(request.json())
    // if (!request.bodyUsed) {
    //   return {auth: true}
    // }
    const response: ICommonResponse<T> = await request.json();
    if (!response.success) throw Error(response.message);

    return response.data;
  };
}
