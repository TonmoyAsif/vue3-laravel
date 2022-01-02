require("./bootstrap");
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@scripts/routes/router";

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const app = createApp({
    router: router,
});

app.use(router);
app.mount("#app");
