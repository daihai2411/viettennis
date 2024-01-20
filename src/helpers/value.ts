import { EMPTY_VALUE } from "@/const/value";

export const formatVal = (text: any) => {
  if (text || text === "" || text === 0) {
    return text;
  }

  return EMPTY_VALUE;
};

export const checkEmptyVal = (text: any) => {
  if (text) {
    return text;
  }
  return EMPTY_VALUE;
};

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
    params.delete("token");
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

export const convertCamelCaseToLine = (obj: object) => {
  const keys = Object.keys(obj);
  const newObj = {} as any;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const newKey = key.replace(/([A-Z])/g, "_$1").toLowerCase();
    newObj[newKey] = obj[key as keyof typeof obj];
  }
  return newObj;
};

export const convertLineToCamelCase = (obj: object) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(convertLineToCamelCase);
  }

  const camelCaseObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const camelCaseKey = key.replace(/_([a-z])/g, function (match, group) {
        return group.toUpperCase();
      });
      camelCaseObj[camelCaseKey] = convertLineToCamelCase(obj[key]);
    }
  }

  return camelCaseObj;
};

export const parseDMY = (dateString) => {
  if (dateString) {
    const [d, m, y] = dateString.split(/\D/);
    return new Date(y, m - 1, d);
  }
  return dateString;
};
