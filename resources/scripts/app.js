require('./bootstrap');
import Vue from 'vue'

import VueRouter from 'vue-router';
import {routes} from '@scripts/routes/router';
 
Vue.use(VueRouter);
 
const router = new VueRouter({
    mode: 'history',
    routes: routes
});
 
const app = new Vue({
    el: '#app',
    router: router,
});