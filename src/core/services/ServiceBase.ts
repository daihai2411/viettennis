import { AxiosResponse } from "axios";
import EventEmitter, { SHOW_POPUP_ERROR } from "../../helpers/EventEmitter";
import { getLanguage } from "../../helpers/language";
import memoryCacheManager from "../cache/MemoryCacheManager";

export default class ServiceBase {
  getData = (
    promiseAction: () => Promise<AxiosResponse>,
    isShowAlertError = false
  ) => {
    return new Promise((resolve, reject) => {
      promiseAction()
        .then((res) => {
          if (!res || res.status === 204) {
            return resolve({});
          }
          return resolve(res.data);
        })
        .catch((err: any) => {
          if (
            isShowAlertError &&
            ["post", "delete", "put"].includes(err?.response?.config?.method) &&
            err?.response?.data?.data
          ) {
            EventEmitter.dispatch(SHOW_POPUP_ERROR, {
              isShow: true,
              messages: err?.response?.data?.data,
            });
          }

          return reject(err);
        });
    });
  };

  applyMemoryCache =
    (
      key: string,
      params: Record<string, any>,
      absoluteExpireTime?: Date,
      slidingExpireTimeInMinute?: number,
      removeCallback?: () => void,
      isCacheLocal?: boolean
    ) =>
    (promiseAction: () => Promise<AxiosResponse>) => {
      const cacheKey = this.getCacheKey(key, params);

      const cacheItem = memoryCacheManager.get(cacheKey, isCacheLocal);

      if (cacheItem) {
        return new Promise((resolve) => resolve(cacheItem));
      }

      return promiseAction().then((response) => {
        if (!response || response.status === 204) {
          return {};
        }
        const data = response.data;

        memoryCacheManager.add(
          cacheKey,
          data,
          absoluteExpireTime,
          slidingExpireTimeInMinute,
          removeCallback,
          isCacheLocal
        );
        return data;
      });
    };

  getCacheKey(key: string, params: Record<string, any>) {
    return (
      key + JSON.stringify(this.formatParams(params)).replace(/[}{'.":]/g, "")
    );
  }

  formatParams = (params: Record<string, any>) => {
    return { lang: getLanguage(), ...params };
  };
}
