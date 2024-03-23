import "@/assets/style.css";

import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "@/App.vue";
import router from "@/router";

import { setupI18n } from "./plugins/i18n";

const app = createApp(App);

app.use(router);
setupI18n(app);

const pinia = createPinia();
app.use(pinia);

app.mount("#app");
