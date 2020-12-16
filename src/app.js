import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import fastClick from 'fastclick';
import home from './components/home.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(() => {
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      fastClick.attach(document.body);
    }, false);
  }
});

const routes = [
  {
    path: '/',
    component: home,
    name: 'home'
   },
   {
     path: '*',
     redirect: '/'
   }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router
}).$mount('#app');
