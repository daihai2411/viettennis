import EventEmitter, { API_TIMEOUT } from "@/helpers/EventEmitter";
import { getLanguage } from "@/helpers/language";
import { formatObjectWithEmptyValue } from "@/helpers/value";
import { UserSession } from "@/types/user";
import axios from "axios";
import { getSession } from "next-auth/react";
import registerCancelTokenAxios from "./RegisterCancelTokenAxios";

const IS_PUBLIC_SERVICE = false;

let user: UserSession | null = null;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      EventEmitter.dispatch(API_TIMEOUT, "");
    }

    if (error.response && error.response.status === 401) {
    }

    return Promise.reject(error);
  }
);

axios.interceptors.request.use(async function (config) {
  config.headers.language = getLanguage();
  return config;
});

export default class ProxyBase {
  baseServiceUrl = "";

  constructor() {
    this.baseServiceUrl = `${process.env.NEXT_PUBLIC_API_URL}`;
    if (!user) {
      ProxyBase.getUser().then((data) => (user = data));
    }
  }

  static async getUser() {
    const session = await getSession();
    const user = <UserSession>session?.user;
    return user;
  }

  async get(
    path: string,
    data?: Record<string, any>,
    type?: string,
    disableCancelToken = false,
    appendCancelToken = "",
    replaceCancelToken = ""
  ) {
    const url = this.baseServiceUrl + path;
    const cancelTokenName = formatCancelTokenName(
      url,
      appendCancelToken,
      replaceCancelToken,
      disableCancelToken
    );
    const params = formatObjectWithEmptyValue(data);

    let source: any = null;
    if (!disableCancelToken) {
      registerCancelTokenAxios.delete(cancelTokenName);
      source = registerCancelTokenAxios.register(cancelTokenName);
    }

    const config: Record<string, any> = {
      params,
      timeout: 35000,
    };

    if (source && !disableCancelToken) {
      config.cancelToken = source.token;
    }

    if (type === "download") {
      config.responseType = "blob";
    }

    if (!IS_PUBLIC_SERVICE) {
      await configAccessToken(user, data);
    }

    return axios.get(url, config).then((data) => {
      if (!disableCancelToken) {
        registerCancelTokenAxios.delete(cancelTokenName);
      }
      return data;
    });
  }

  async post(
    path: string,
    data?: Record<string, any>,
    type?: string,
    config: Record<string, any> = {},
    disableCancelToken: boolean = false,
    appendCancelToken: string = "",
    replaceCancelToken: string = ""
  ) {
    const url = this.baseServiceUrl + path;
    const cancelTokenName = formatCancelTokenName(
      url,
      appendCancelToken,
      replaceCancelToken,
      disableCancelToken
    );
    let source: any = null;

    if (!disableCancelToken) {
      registerCancelTokenAxios.delete(cancelTokenName);
      source = registerCancelTokenAxios.register(cancelTokenName);
    }

    if (source && !disableCancelToken) {
      config.cancelToken = source.token;
    }

    if (type === "download") {
      config.responseType = "blob";
    }

    config.headers = { "content-type": "multipart/form-data" };

    if (!IS_PUBLIC_SERVICE) {
      await configAccessToken(user, data);
    }

    const params = formatObjectWithEmptyValue(data);

    return axios
      .post(`${this.baseServiceUrl}${path}`, params, config)
      .then((data) => {
        if (!disableCancelToken) {
          registerCancelTokenAxios.delete(cancelTokenName);
        }
        return data;
      });
  }

  async put(
    path: string,
    data: Record<string, any>,
    config: Record<string, any> = {},
    disableCancelToken: boolean = false,
    appendCancelToken: string = "",
    replaceCancelToken: string = ""
  ) {
    const url = this.baseServiceUrl + path;
    const cancelTokenName = formatCancelTokenName(
      url,
      appendCancelToken,
      replaceCancelToken,
      disableCancelToken
    );
    let source: any = null;

    if (!disableCancelToken) {
      registerCancelTokenAxios.delete(cancelTokenName);
      source = registerCancelTokenAxios.register(cancelTokenName);
    }

    if (source && !disableCancelToken) {
      config.cancelToken = source.token;
    }

    if (!IS_PUBLIC_SERVICE) {
      await configAccessToken(user);
    }

    const params = formatObjectWithEmptyValue(data);

    return axios
      .put(`${this.baseServiceUrl}${path}`, params, config)
      .then((data) => {
        if (!disableCancelToken) {
          registerCancelTokenAxios.delete(cancelTokenName);
        }
        return data;
      });
  }

  async delete(
    path: string,
    params: Record<string, any>,
    config: Record<string, any> = {}
  ) {
    config.data = { ...params };

    if (!IS_PUBLIC_SERVICE) {
      await configAccessToken(user);
    }

    return axios.delete(`${this.baseServiceUrl}${path}`, config);
  }
}

const formatCancelTokenName = (
  url: string,
  appendCancelToken: string,
  replaceCancelToken: string,
  disableCancelToken: boolean
) => {
  if (disableCancelToken) {
    return url;
  }

  if (replaceCancelToken) {
    return replaceCancelToken;
  }

  return url + appendCancelToken;
};

const configAccessToken = async (user: any, data?: Record<string, any>) => {
  let userToken = user;

  if (!userToken) {
    const session = await getSession();
    userToken = <UserSession>session?.user;
  }

  const token =
    userToken?.token ||
    data?.token ||
    (data instanceof FormData ? data?.get("token") : "");

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};
