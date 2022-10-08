import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/auth/Register.vue';
import Login from '../views/auth/Login.vue';
import DefaultLayout from '../components/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    redirect: '/',
    component: DefaultLayout,
    meta: {},
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/auth/register',
        name: 'Register',
        component: Register
      },
      {
        path: '/auth/login',
        name: 'Login',
        component: Login
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  return next();
})


export default router;