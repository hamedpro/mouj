//import * as $j from "./static/jquery-3.5.1.js";
/* import * as hamed from "./hamed.js"; */

//require('chartjs')
/* import "bootstrap/dist/css/bootstrap.css"; */

import Vue from 'vue'
import App from './App.vue'
//import adminDashboard from './components/admin-dashboard.vue'
//import charts from './components/charts.vue'


//import newTransaction from './components/new.vue'
//import paymentSuccess from './components/payment-success.vue'
//import register from './components/register.vue'
//import supportForm from './components/support-form.vue'

//import support from './components/support.vue'

//import userHome from './components/user-home.vue'
//import home from "./components/home.vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter)
Vue.config.productionTip = false


let routes = [
  {
      path:"/",
      component:()=>import("./components/home.vue")
  },
  {
      path:"/admin-dashboard",
      component:() => import('./components/admin-dashboard.vue')
  },
  {
      path:"/charts",
      component:()=>import('./components/charts.vue')
  },
  {
      path:"/support",
      component:()=>import('./components/support.vue')
  },
  {
      path:"/user-home",
      component:()=>import('./components/user-home.vue')
  },
  {
      path:"/new",
      component:()=>import('./components/new.vue')
  },
  {
      path:'/register',
      component:()=>import('./components/register.vue')
  },
  {
      path:'/payment-success/:transaction_id',
      component:()=>import('./components/payment-success.vue')
  },
  {
      path:'/support-form',
      component:()=>import('./components/support-form.vue')
  }
]
let router = new VueRouter({routes})
new Vue({
  render: h => h(App),
  router,
  watch:{
        /* $route(to,from){
            hamed.update_header_navbar()

        } */
    },
    created:function(){
        /* $(document).ready(()=>{ //make sure about it
            hamed.update_header_navbar()
        }) */
        
    }
}).$mount('#app')
