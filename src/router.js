import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './components/MainPage.vue';
import LoginComp from './components/LoginComp.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/starter' },
    { path: '/starter', component: MainPage },
    { path: '/login', component: LoginComp },
  ],
});

export default router;
