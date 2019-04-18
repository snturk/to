<template>
  <div class="component" id="createWrapper">
    <div id="createForm">
      <div id="formHeading">create your account</div>
      <input type="email" name="email" v-model="email" placeholder="email"><br>
      <input type="text" name="username" v-model="username" placeholder="username"><br>
      <input type="password" name="password" v-model="password" placeholder="password">
      <div id="createButton" :class="{readyToCreate: email && password && username}" @click="createUser">create & login</div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import router from '../main'
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
      if (this.username.replace(/\s/g, '').length) {
        
          if(this.username.length >= 10){
            alert('Username is too long');
        }else if(this.username.length < 1){
          alert('Please write a username');
        }else {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
            (user) => {
              this.setUsername(this.username);
            this.signIn(this.email, this.password);
          },

          (err) => {
            alert('Error ' + err.message);
          }
          
          );
        }
      }else {
        alert('The username only contains spaces tabs or linebreaks');
      }

    },
    setUsername(username) {
      firebase.auth().currentUser.updateProfile({
          displayName: username,
        }).then(function() {
          console.log('Success');
        }).catch(function(error) {
          console.log(error.message);
        });
    },
    signIn(email, password){
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        (user) => {
          this.$router.replace('home');
          console.log('signedIn: ' + user.displayName);
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
