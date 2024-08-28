import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import Navbar from "./components/Navbar.vue";
import router from "./router/routes";

const app = createApp(App).use(router);
app.component("Navbar", Navbar);
app.mount("#app");
