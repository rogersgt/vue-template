import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import fastClick from 'fast-click';

Vue.use(VueResource);
Vue.use(VueRouter);

const paths = [
    {
        path: '/',
        name: 'home',
        component: require('/path/to/component.vue')
    }
];

const router = new VueRouter({
    paths,
    history: true
});

const app = new Vue({
  router
}).$mount('#app');

attachFastClick(document.body);
