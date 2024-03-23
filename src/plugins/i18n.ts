import { App } from "vue";
import { createI18n } from "vue-i18n";

export const i18n = createI18n({
  locale: "ru",
  fallbackLocale: "ru",
  messages: {
    ru: {
      converter: "Конвертер",
      choose$: "Выберите валюту",
      currencyList: "Список валют",
    },
  },
});

export const setupI18n = (app: App<Element>): void => {
  app.config.globalProperties.$t = (key: string) => i18n.global.t(key);
  app.use(i18n);
};
