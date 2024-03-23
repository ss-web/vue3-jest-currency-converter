<template>
  <h1>{{$t('currencyList')}}</h1>
  <ul>
    <li v-for="currency in currencies" :key="currency.CharCode">
      {{ currency.CharCode }} - {{ currency.Name }} ({{ currency.Value }})
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCurrencyStore } from '@/store';

const currencyStore = useCurrencyStore();
const currencies = computed(() => currencyStore.getCurrencies);
</script>

<style scoped>
ul{
  text-align: left;
  margin: auto;
  display: inline-flex;
  width: auto;
  flex-direction: column;
}
</style>