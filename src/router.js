import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './components/MainPage.vue';
import LoginComp from './components/LoginComp.vue';
import CounterComp from './components/CounterComp.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/starter' },
    { path: '/starter', component: MainPage },
    { path: '/login', component: LoginComp },
    { path: '/counter', component: CounterComp },
  ],
});

export default router;
