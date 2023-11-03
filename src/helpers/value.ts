import { EMPTY_VALUE } from "@/const/value";

export const valByKeyWithDot = (
  data: Record<string, any>,
  keyWithDot: string
) => {
  if (!isValidNumber(data)) {
    return EMPTY_VALUE;
  }

  return keyWithDot.split(".").reduce((result, key) => {
    return !isValidNumber(result[key]) ? EMPTY_VALUE : result[key];
  }, data);
};

export const isValidNumber = (val: any) => {
  return val !== undefined && val !== null;
};

const privateKeys = [""];

export const formatObjectWithEmptyValue = (
  params: Record<string, any> = {}
) => {
  if (params instanceof FormData) {
    params.delete("auth_token");
    return params;
  } else {
    return Object.keys(params).reduce(
      (obj, key) =>
        !privateKeys.includes(key) &&
        ((params[key] !== null &&
          params[key] !== undefined &&
          params[key] !== "") ||
          (Array.isArray(params[key]) && params[key].length > 0))
          ? { ...obj, [key]: params[key] }
          : obj,
      {}
    );
  }
};
