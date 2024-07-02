// src/i18n.js
import { createI18n } from 'vue-i18n';
import { getLocale } from './utils/locale';
import en from './locales/en.json';
import zh from './locales/zh.json';

const messages = {
  en,
  zh
};

const locale = getLocale();

const i18n = createI18n({
  locale: locale, // set locale from utility
  messages
});

export default i18n;
