//import * as $j from "./static/jquery-3.5.1.js";
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)
Vue.config.productionTip = false

let routes = [
    {
        path: "/",
        component: () => import("./components/home.vue")
    },
    {
        path: "/admin-dashboard",
        component: () => import('./components/admin-dashboard.vue')
    },
    {
        path: "/charts",
        component: () => import('./components/charts.vue')
    },
    {
        path: "/support",
        component: () => import('./components/support.vue')
    },
    {
        path: "/user-home",
        component: () => import('./components/user-home.vue')
    },
    {
        path: "/new",
        component: () => import('./components/new.vue')
    },
    {
        path: '/register',
        component: () => import('./components/register.vue')
    },
    {
        path: '/payment-success/:transaction_id',
        component: () => import('./components/payment-success.vue')
    },
    {
        path: '/support-form',
        component: () => import('./components/support-form.vue')
    }
]
let router = new VueRouter({routes})
new Vue({
  render: h => h(App),
  router,
  watch:{
      
    },
    created:function(){
        
        
    }
}).$mount('#app')
