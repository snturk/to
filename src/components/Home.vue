<template>
  <div class="component" id="home">
    <div id="home-container">
      <div id="navBar">
      <div id="navContainer">
        <div id="headTitle" align="left">TO</div>
        <div id="navRight">
          <div id="account">account</div>
          <div id="logout" @click="signOut">log out</div>
        </div>
      </div>
      
    </div>
    <div id="addPost">
      <textarea name="text" id="input-text" v-model="newPost.text"></textarea>
      <div id="postBtn" :class="{readyToPost: newPost.text}" @click="postDB">post</div>
    </div>
    <div id="posts">
      <post  
        v-for="userPost in userPosts" :key="userPost.id"
        :text="userPost.text"
        :username="userPost.username"
        :date="userPost.date"
        >
      </post>
    </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import {router, currentUsername} from '../main'
import post from './Post'
import { userPosts, ref } from '../database/post'

export default {
  name: 'Home',
  data () {
    return {
      userPosts: userPosts,
      newPost: {
        username: currentUsername,
        text: null,
        date: new Date().toISOString().slice(0,10),
      },
    }
  },
  methods: {
    postDB() {
        if (this.newPost.text != "") {
          
          this.userPosts.length = 0;      
          ref.push(this.newPost);
          console.log("Infos has been added to DB.")
          this.newPost.text = null;

        }
    },
    signOut() {
      firebase.auth().signOut()
      this.newPost.text = null;
      this.$router.replace('login');
    },

  },
  components: {
    post
  }

}
</script>

<style scoped>

#navBar {
  left: 0;
  top: 0;
  width: 100%;
  background-color: #e6e6e6;
  display: block;
  box-shadow: 2px 2px 10px rgb(179, 179, 179);
}

#navContainer {
  padding: 15px;
  overflow: hidden;
}

#headTitle {
  float: left;
  font-size: 34px;
  letter-spacing: 2px;
}

#navRight {
  float: right;
}

#navRight div {
  cursor: pointer;
  padding: 5px;
  float: left;
  transition-duration: 300ms;
}
#navRight div:hover {
  transform: scale(1.12);
}

#input-text {
  margin: 0 auto;
  margin-top: 5%;
  width: 25%;
  padding: 15px;
  font-size: 15px;
  background-color: #bfbfbf;
  resize: none;
  box-shadow: 2px 2px 10px rgb(179, 179, 179);
  border-radius: 4px;
}

#postBtn {
  cursor: pointer;
  font-family: 'Lato';
  margin: 0 auto;
  margin-top: 1%;
  font-size: 23px;
  padding: 2px 6px 6px 6px;
  width: fit-content;
  border-radius: 4px;
  border: 0.8px black solid;
  box-shadow: 2px 2px 10px rgb(179, 179, 179);
  transition-duration: 300ms;
}
.readyToPost {
  background-color: black;
  color: #e6e6e6;
}
.readyToPost:hover {
  transform: scale(0.9);
}

#posts {
  margin: 0 auto;
  margin-top: 5%;
  background-color: #8c8c8c;
  max-width: 35%;
  height: fit-content;
  border-radius: 4px;
  box-shadow: 2px 2px 10px rgb(179, 179, 179);
}
#posts:last-child {
  margin-bottom: 4%;
  border-bottom: none;
}

@media only screen and (max-width: 768px){

  #headTitle {
    font-size: 27px;
  }

  #navRight div {
    font-size: 16px;
  }

  #input-text {
    width: 55%;
  }

  #postBtn {
    font-size: 19px;
    padding: 1px 3px 3px 3px;
  }

  #posts {
    max-width: 70%;
  }
}
</style>
