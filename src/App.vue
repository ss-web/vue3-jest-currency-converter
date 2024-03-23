<template>
  <Menu />
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCurrencyStore } from '@/store';
import Menu from '@/components/Menu.vue';

const currencyStore = useCurrencyStore();

onMounted(async () => {
  await currencyStore.fetchCurrencies();
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
