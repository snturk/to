<template>
  <div class="component" id="account">
    <router-link id="goHome" to="home">home</router-link>
    <div id="username"> {{username}} </div>
    <div id="postLength"> <span> {{currentUserPosts.length}} </span> posts </div>
    <hr>
    <div id="postsContainer">
      <post
      class="post"
      v-for="currentUserPost in currentUserPosts" :key="currentUserPost.id"
      :text="currentUserPost.text"
      :username="currentUserPost.username"
      :date="currentUserPost.date"
      >
      </post>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import router from 'vue-router'
import { userPosts } from '../database/post'
import post from './Post'

export default {
  name: 'Account',
  data() {
    return {
      username: firebase.auth().currentUser.displayName,
      email: firebase.auth().currentUser.email,
      user: firebase.auth().currentUser,
      userPosts,
      currentUserPosts: [ ],
    }
  },
  mounted() {
    for(var i = 0; i < userPosts.length; i++) {
        var post = userPosts[i];
        if(post.username == this.username) {
          this.currentUserPosts.push(post);
        }
    }
  },
  components: {
    post
  }
}
</script>

<style scoped>

.component {
  margin-top: 5%;
}

#username {
  font-size: 34px;
  font-family: 'Assistant';
  font-weight: 700;
  margin-top: 5%;
}

#postLength {
  font-size: 18px;
  font-family: 'Raleway'
}
#postLength span {
  font-weight: bold;
}

hr {
  height: 1.4px;
  color: black;
  background-color: black;
  border: none;
  margin-bottom: 4%;
  margin-top: 4%;
}

#goHome {
  cursor: pointer;
  font-family: 'Lato';
  font-size: 23px;
  padding: 2px 6px 6px 6px;
  width: fit-content;
  border-radius: 4px;
  border: 0.8px black solid;
  box-shadow: 2px 2px 10px rgb(179, 179, 179);
}

#postsContainer {
  max-width: 60%;
  margin: 0 auto;
}

</style>
