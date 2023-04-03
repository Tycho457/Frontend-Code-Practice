import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from './store/index'

const app = createApp(App);
createApp(App).use(store).use(router).mount("#app");
app.use(store,key)