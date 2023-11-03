import { languages } from "@/const/language";
import { EMPTY_VALUE } from "@/const/value";
import moment from "moment";
import "moment/locale/vi";

const { en, vi } = languages;

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
    [en]: "DD-MMM-YYYY HH:mm:ss",
    [vi]: "DD-MM-YYYY HH:mm:ss",
  },
  DATE: {
    [en]: "YYYY-MM-DD",
    [vi]: "YYYY-MM-DD",
  },
  DATE_TIME_TABLE: {
    [en]: "DD-MMM-YYYY HH:mm",
    [vi]: "DD/MM/YYYY HH:mm",
  },
  HOUR: {
    [en]: "HH:mm",
    [vi]: "HH:mm",
  },
  DATE_TIME_1: {
    [en]: "YYYY-MM-DD HH:mm:ss",
    [vi]: "YYYY-MM-DD HH:mm:ss",
  },
  DATE_SLASH: {
    [en]: "YYYY/MM/DD",
    [vi]: "DD/MM/YYYY",
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
  return !!str && moment(str).isValid()
    ? moment.utc(str).utcOffset(timeZone).format(format[locale]).toString()
    : EMPTY_VALUE;
};
