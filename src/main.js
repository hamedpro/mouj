/* import * as $ from "./assets/jquery-3.5.1.js"
import * as hamed from "./hamed.js"; */

//require('chartjs')
import "bootstrap/dist/css/bootstrap.css";

import Vue from 'vue'
import App from './App.vue'
import adminDashboard from './components/admin-dashboard.vue'
import charts from './components/charts.vue'
/* import myHeader from './components/header.vue' */
/* import homeOption from './components/home-option.vue' */
import newTransaction from './components/new.vue'
import paymentSuccess from './components/payment-success.vue'
import register from './components/register.vue'
import supportForm from './components/support-form.vue'
/* import supportOption from './components/support-option.vue'
 */import support from './components/support.vue'
/* import tip from './components/tip.vue' */
import userHome from './components/user-home.vue'
import home from "./components/home.vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter)
Vue.config.productionTip = false


let routes = [
  {
      path:"/",
      component:home
  },
  {
      path:"/admin-dashboard",
      component:adminDashboard
  },
  {
      path:"/charts",
      component:charts
  },
  {
      path:"/support",
      component:support
  },
  {
      path:"/user-home",
      component:userHome
  },
  {
      path:"/new",
      component:newTransaction
  },
  {
      path:'/register',
      component:register
  },
  {
      path:'/payment-success/:transaction_id',
      component:paymentSuccess
  },
  {
      path:'/support-form',
      component:supportForm
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
