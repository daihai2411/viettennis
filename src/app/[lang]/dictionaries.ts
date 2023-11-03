import "server-only";
import { i18n } from './i18n-config'

export type Locale = keyof typeof dictionaries;

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  vi: () => import("./dictionaries/vi.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]()

