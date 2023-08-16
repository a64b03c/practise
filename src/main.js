import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "virtual:svg-icons-register";
import globalComponents from "@/components/Common";
import "./assets/main.scss";

const app = createApp(App);
app.use(router);
app.use(store);

app.use(globalComponents);
app.mount("#app");
