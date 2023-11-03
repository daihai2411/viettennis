import { valByKeyWithDot } from "./value";

export const debounce = (func: any, timeout = 300) => {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const keyBy = (
  array: Record<string, any>[],
  key: string,
  formatKey: (val: any) => any = (val) => val
) => {
  const result: Record<string, any> = {};

  array.forEach((item) => {
    result[
      formatKey
        ? formatKey(valByKeyWithDot(item, key))
        : valByKeyWithDot(item, key)
    ] = item;
  });

  return result;
};

export const getCookie = (name: string): string | null => {
  const nameLenPlus = name.length + 1;
  return (
    document.cookie
      .split(";")
      .map((c) => c.trim())
      .filter((cookie) => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map((cookie) => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null
  );
};

export const removeAccents = (str: string) => {
  return str
    ?.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};

export const removeNullOrUndefinedValueInObject = (obj: any) => {
  if (obj) {
    const objNew = { ...obj };
    Object.keys(objNew).forEach((key) => {
      if (!objNew[key]) {
        delete objNew[key];
      }
    });
    return objNew;
  }
  return {};
};
