// src/i18n.js
import { createI18n } from 'vue-i18n';
import { getLocale } from './utils/locale';

const modules = import.meta.glob('./locales/**/**/*.json', { eager: true });

const messages = {};

// Function to load and organize messages
const loadMessages = () => {
  for (const path in modules) {
    const module = modules[path];
    const parts = path.split('/');

    if (parts.length < 4) {
      console.error(`Unexpected path format: ${path}`);
      continue;
    }

    const localePath = parts[2]; // Extract language code from the path
    const fileName = parts[3].replace('.json', '');

    if (!messages[localePath]) {
      messages[localePath] = {};
    }

    messages[localePath][fileName] = module.default;
  }

  console.log('Loaded messages:', messages);
};

// Load messages and initialize i18n
loadMessages();

const locale = getLocale();

const i18n = createI18n({
  locale, // Set locale from utility
  fallbackLocale: 'en', // Fallback to English if translation is missing
  messages
});

export default i18n;
