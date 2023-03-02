import "./bootstrap";
import "../css/app.css";
import "vue3-easy-data-table/dist/style.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import Vue3EasyDataTable from "vue3-easy-data-table";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "K UI";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(Vue3EasyDataTable)
            .mount(el);
    },
});

// InertiaProgress.init({ color: "#a855f7" });
InertiaProgress.init({ color: "#556df7" });
