import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from './components/Home'
import Login from './components/Login'
import Create from './components/Create';
import Account from './components/Account'

export const router = new VueRouter({

  mode: "history",
  routes: [
    { redirect: "/to/login", path: "/" },
    { redirect: "/to/login", path: "*" },
    { component: Login, path:"*" },
    { component: Login, path: "/to/login" },
    { component: Create, path: "/to/create" },
    { component: Account, path: "/to/account" },
    { 
      component: Home, 
      path: "/home",
      meta: {
        requiresAuth: true
      }
    },
  ],
 

});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

var config = {
  apiKey: "AIzaSyCuqMmqryfGe8O-ikftrldOmlFcH65nZ38",
  authDomain: "to-users.firebaseapp.com",
  databaseURL: "https://to-users.firebaseio.com",
  projectId: "to-users",
  storageBucket: "",
  messagingSenderId: "222978073325"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
    
  }else {
    firebase.auth().signOut();
    router.replace('login');
  };

  (err) => {
    console.log(err.message)
  }
});


