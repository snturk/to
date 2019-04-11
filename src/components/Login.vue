<template>
  <div class="component" id="loginWrapper">
    <div id="loginHeading">
      <div id="appTitle"> TO </div>
      <div id="appDescription">the <b>text only</b> social media</div>
    </div>
    <div id="loginPanel">
      
      <input type="text" name="email" id="input-email" v-model="email" placeholder="email"><br>
      <input type="password" name="password" id="input-password" v-model="password" placeholder="password">
      <div id="login" @click="signIn" :class="{readyToLogin: email && password}">log in</div>
      <router-link to="/create" id="linkCreate">create an account</router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import VueRouter from 'vue-router'
import router from '../main'

export default {
  name: "Login",
  data(){
    return{
      email: "",
      password: "",
      router
    }
  },
  methods: {
    
    signIn: function(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('home');
        },

        (err) => {
        alert('Error ' + err.message);
        }
      );
    }
    
  }
}

</script>

<style scoped>
#loginWrapper {
  margin-top: 10%;
}
#appTitle {
  font-family: 'Assistant', sans-serif;
  font-weight: 100;
  font-size: 84px;
  color: rgb(40, 40, 40);
}

#appDescription {
  font-family: 'Heebo', sans-serif;
  font-size: 22px;
  margin-bottom: 2%;
  color: rgb(40, 40, 40);
}

#loginPanel {
  width: fit-content;
  margin: 0 auto;
  margin-top: 5%;
}

input {
  padding: 10px;
  font-size: 13px;
  box-shadow: 2px 2px 10px rgb(145, 145, 145);
  margin-top: 4%;
}

#login {
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  margin-top: 8%;
  transition-duration: 400ms;
  
}
.readyToLogin {
  padding: 10px;
  background-color: rgb(109, 109, 109);
  box-shadow: 2px 2px 10px rgb(145, 145, 145);
  color: floralwhite;
  cursor: pointer;
}
.readyToLogin:hover {
  transform: scale(0.9);
}

#linkCreate {
  font-family: 'Lato', sans-serif;
  color: black;
  text-decoration: none;
  transition-duration: 400ms;
}
#linkCreate:hover {
  color: floralwhite;
}

</style>
