import { ref, computed } from 'vue';
import { defineStore } from "pinia";
import { fetchCurrencies as giveCurrencies } from "@/services/currencyService";
import { Currency } from "@/types/Currency";

export const useCurrencyStore = defineStore('currency', () => {
  const currencies = ref([] as Currency[]);
  const baseCurrency = ref("RUB");

  const fetchCurrencies = async () => {
    try {
      currencies.value = await giveCurrencies();
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  };

  const setBaseCurrency = (currency: string) => {
    baseCurrency.value = currency;
  };

  const getCurrencies = computed(() => currencies.value);
  const getBaseCurrency = computed(() => baseCurrency.value);

  return {
    currencies,
    baseCurrency,
    fetchCurrencies,
    setBaseCurrency,
    getCurrencies,
    getBaseCurrency
  };
});

