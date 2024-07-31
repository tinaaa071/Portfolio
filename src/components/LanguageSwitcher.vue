<!-- src/components/LanguageSwitcher.vue -->
<template>
    <button class="whitespace-nowrap" @click="toggleLocale">{{ buttonText }}</button>
  </template>
  
  <script>
  import { setLocale } from '../utils/locale';
  
  export default {
    computed: {
      buttonText() {
        return this.$i18n.locale === 'en' ? 'English' : '中文';
      }
    },
    methods: {
      toggleLocale() {
        const newLocale = this.$i18n.locale === 'en' ? 'zh' : 'en';
        this.$i18n.locale = newLocale;
        setLocale(newLocale);
      }
    }
  };
  </script>
  