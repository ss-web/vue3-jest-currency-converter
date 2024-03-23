<template>
  <h1>{{$t('converter')}}</h1>
  <label>{{$t('choose$')}}</label><br />
  <select v-model="selectedCurrency">
    <option v-for="currency in currencies" :key="currency.CharCode" :value="currency.CharCode">
      {{ currency.CharCode }}
    </option>
  </select>
  <input type="number" v-model="amount" min="0" step="0.01">
  <p>{{ amount }} {{ selectedCurrency }} = {{ convertedAmount }} RUB</p>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCurrencyStore } from '@/store';
import { Currency } from '@/types/Currency';

const currencyStore = useCurrencyStore();
const currencies = computed(() => currencyStore.getCurrencies);
const selectedCurrency = ref('USD');
const amount = ref(1);

const convertedAmount = computed(() => {
  const currency = currencies.value.find((curr: Currency) => curr.CharCode === selectedCurrency.value);
  return (currency ? amount.value * currency.Value : 0).toFixed(2);
});
</script>
