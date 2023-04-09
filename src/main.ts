import "./assets/main.postcss";

import { createApp } from "vue";
import { router } from "./modules/router";
import { apollo } from "./modules/apollo";

import devtools from "@vue/devtools";
import App from "./App.vue";
import { pinia } from "./modules/store";

if (import.meta.env.DEV) {
  devtools.connect("http://localhost", 8098);
}

createApp(App).use(router).use(pinia).use(apollo).mount("#app");
