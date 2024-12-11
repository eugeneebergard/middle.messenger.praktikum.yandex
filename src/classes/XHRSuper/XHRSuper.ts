import { TOptions, TRequestOptions, METHODS } from './XHRSuper.types';
import { queryStringify } from '@/utils';

export class XHRSuper {
  get = (url: string, options: TOptions = {}): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.GET });
  };

  post = (url: string, options: TOptions = {}): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.POST });
  };

  put = (url: string, options: TOptions = {}): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };

  delete = (url: string, options: TOptions = {}): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  request = (url: string, options: TRequestOptions = { method: METHODS.GET }): Promise<XMLHttpRequest> => {
    const { data, headers = {}, method, timeout } = options;

    return new Promise<XMLHttpRequest>((resolve, reject) => {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();

      const isGet = method === METHODS.GET;
      const xhrUrl = isGet && !!data ? `${url}${queryStringify(data)}` : url;

      xhr.open(method, xhrUrl);

      for (const [key, value] of Object.entries(headers)) {
        xhr.setRequestHeader(key, value);
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout ? timeout : 0;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
