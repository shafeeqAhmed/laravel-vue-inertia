require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


// Setup of the Inertia app
import { createApp, h } from 'vue';
import {createInertiaApp, Link, Head} from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import App from "./Layout/App";
import Permissions from './mixins/Permissions';

createInertiaApp({
    resolve: async name => {
        let page = (await import(`./Pages/${name}`)).default;

        page.layout ??= App; // Set default layout if no other layout provided

        return page;
    },

    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Link", Link)
            .component("Head", Head)
            .mixin(Permissions)
            .mount(el)
    },

    title: title => "Laravel: " + title,
});

InertiaProgress.init({
    color: 'red',
    showSpinner: true,
});
