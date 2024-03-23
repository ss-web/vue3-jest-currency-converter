import { defineStore } from "pinia";

import { fetchCurrencies as giveCurrencies } from "@/services/currencyService";
import { Currency } from "@/types/Currency";

export const useCurrencyStore = defineStore({
  id: "currency",
  state: () => ({
    currencies: [] as Currency[],
    baseCurrency: "RUB",
  }),
  getters: {
    getCurrencies(): Currency[] {
      return this.currencies;
    },
    getBaseCurrency(): string {
      return this.baseCurrency;
    },
  },
  actions: {
    async fetchCurrencies() {
      try {
        this.currencies = await giveCurrencies();
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    },
    setBaseCurrency(currency: string) {
      this.baseCurrency = currency;
    },
  },
});
