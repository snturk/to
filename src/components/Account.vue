<template>
  <div class="component" id="account">
    <router-link id="goHome" to="/home">home</router-link>
    <div id="username"> {{$route.params.username}} </div>
    <hr>
    <div class="userInfo"> <span> {{currentUserPosts.length}} </span> posts </div>
    <div class="userInfo"> <span>0</span> readers </div>
    <div class="userInfo"> <span>0</span> reading </div>
    <hr>
    <div id="postsContainer">
      <post
      class="post"
      v-for="currentUserPost in currentUserPosts" :key="currentUserPost.id"
      :text="currentUserPost.text"
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
      username: null,
      userPosts,
      currentUserPosts: [ ],
    }
  },
  mounted() {
    this.username = this.$route.params.username;
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

#goHome {
  cursor: pointer;
  font-family: 'Lato';
  font-size: 20px;
  padding: 2px 6px 6px 6px;
  margin-top: 2%;
  margin-left: 2%;
  width: fit-content;
  border: 0.8px black solid;
  border-radius: 4px;
  box-shadow: 2px 2px 10px rgb(179, 179, 179);
  display: block;
}

#username {
  font-size: 34px;
  font-family: 'Assistant';
  font-weight: 700;
  margin-bottom: 10px;
}

.userInfo {
  font-size: 18px;
  font-family: 'Raleway';
  display: inline-block;
  margin-left: 5%;
}
.userInfo span {
  font-size: 23px;
  font-weight: bold;
  font-family: 'Assistant';
  letter-spacing: 1px;
  
}

hr {
  height: 1px;
  color: black;
  background-color: black;
  border: none;
  margin-bottom: 2%;
  margin-top: 2%;
}


#postsContainer {
  max-width: 60%;
  margin: 0 auto;
  margin-bottom: 2%;
  box-shadow: 1.4px 1.4px 7px rgb(116, 116, 116);
}

@media only screen and (max-width: 768px){

  #postsContainer {
    max-width: 80%;
  }

  #username {
    font-size: 24px;
    margin-right: 1%;
    margin-left: -2%;
  }

  .userInfo {
    font-size: 15px;
    margin-left: 1%;
  }

  .userInfo span{
    font-size: 19px;
  }
}

</style>
