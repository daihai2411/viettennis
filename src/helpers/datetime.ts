import { languages } from "@/const/language";
import { EMPTY_VALUE } from "@/const/value";
import moment from "moment";
import "moment/locale/vi";

const { vi } = languages;

export const changeLocaleDateTime = (locale: keyof typeof languages) => {
  moment.locale(locale, {
    week: {
      dow: 1,
      doy: 7,
    },
  });
};

export const FORMAT = {
  DATE_TIME: {
    [vi]: "DD-MM-YYYY HH:mm:ss",
  },
  DATE: {
    [vi]: "YYYY-MM-DD",
  },
  DATE_TIME_TABLE: {
    [vi]: "DD/MM/YYYY HH:mm",
  },
  HOUR: {
    [vi]: "HH:mm",
  },
  DATE_TIME_1: {
    [vi]: "YYYY-MM-DD HH:mm:ss",
  },
  DATE_SLASH: {
    [vi]: "DD/MM/YYYY",
  },
  YEAR: {
    [vi]: "YYYY",
  },
};

export const getCurrentDateTime = (
  format: Record<string, string>,
  locale: keyof typeof languages = "vi",
  timeZone: string = "+07:00"
) => {
  const dateTime = moment().utcOffset(timeZone);
  return format
    ? dateTime.format(format[locale]).toString()
    : dateTime.toISOString();
};

export const formatDateTime = (
  str: string,
  format: Record<string, string> = FORMAT.DATE_TIME,
  locale: keyof typeof languages = "vi",
  timeZone: string = "00:00"
) => {
  console.log("str", str);
  console.log(!!str && moment(str).isValid() ? 1 : 2);

  return !!str && moment(str).isValid()
    ? moment.utc(str).utcOffset(timeZone).format(format[locale]).toString()
    : EMPTY_VALUE;
};
