<template>
  <div class="component" id="createWrapper">
    <div id="createForm">
      <div id="formHeading">create your account</div>
      <input type="text" name="email" v-model="email" placeholder="email"><br>
      <input type="text" name="username" v-model="username" placeholder="username"><br>
      <input type="password" name="password" v-model="password" placeholder="password">
      <div id="createButton" :class="{readyToCreate: email && password && username}" @click="createUser">create & login</div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { router, setUsername } from '../main'
import { database, ref } from '../database/post'

export default {
  name: 'Create',
  data() {
    return {
      email: '',
      password: '',
      username: '',
    }
  },
  methods: {
    createUser: function(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          setUsername(this.username);
          this.$router.replace('home');
        },

        (err) => {
        alert('Error ' + err.message);
        }
        
      );

      
    }
  },
}
</script>

<style scoped>
#createWrapper {
  margin-top: 15%;
}

#formHeading {
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 400;
}

input {
  padding: 10px;
  font-size: 13px;
  box-shadow: 2px 2px 10px rgb(145, 145, 145);
  margin-top: 3%;
}

#createButton {
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  width: fit-content;
  margin: 0 auto;
  margin-top: 3%;
  transition-duration: 400ms;
}
.readyToCreate {
  padding: 10px;
  background-color: rgb(109, 109, 109);
  box-shadow: 2px 2px 10px rgb(145, 145, 145);
  color: floralwhite;
  cursor: pointer;
}
.readyToCreate:hover {
  transform: scale(0.9);
}
</style>
