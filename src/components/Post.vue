<template>
  <div class="component" id="post">
    <div id="text-container">
      <div id="post-text"> {{text}} </div>
    </div>
    
    <div id="post-info"> 
      <span>
        <router-link :to="'/user/' + username">{{username}}</router-link>
      </span> 
      {{date}}
    </div>
    <div class="toggleReply" @click="toggleReply()" v-if="!replyShow">show replies</div>
    <div class="toggleReply" @click="toggleReply()" v-if="replyShow">hide replies</div>
    <div id="replies-container" v-if="replyShow">
      <div class="reply" v-for="reply in replies" :key="reply.text">
        <div id="replyText"> {{reply.text}} </div>
        <div id="replyInfo">
          <span id="replyUsername">
            <router-link :to="'/user/' + username">{{reply.username}}</router-link> 
          </span>
          {{reply.date}}

        </div>
      </div>
      <div id="addReply">
        <input type="text" name="reply" id="input-reply" v-model="newReply.text">
        <span id="replyBtn" @click="replyDB">reply</span>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { userPosts, ref } from '../database/post'
export default {
  props: [
    "id", "title", "text", "username", "date", "replies"
  ],
  data() {
    return {
      newReply: {
        username: firebase.auth().currentUser.displayName,
        text: "",
        date: new Date().toISOString().slice(0,10),
      },
      replyShow: false,
      postID: this.id
    }
  },
  methods: {
    toggleReply() {
      if(this.replyShow) {
        this.replyShow = false;
      }else {
        this.replyShow = true;
      }
    },
    replyDB() {
      if (this.newReply.text.replace(/\s/g, '').length) {

        if (this.newReply.text.length >= 1) {
          
          userPosts.length = 0;      
          ref.child(this.postID + '/replies').push(this.newReply);
          console.log("Infos has been added to DB.");
          this.newReply.text = "";

        }else {
          alert('Please write a text.');
        }
      }else {
        alert('This reply only contains spaces, tabs or linebreaks');
      }
    }
  },
  
}
</script>

<style scoped>

#post {
  font-size: 17px;
  font-family: 'Raleway';
  font-weight: 700;
  background-color: #c7c7c7;
  border-radius: 4px 4px 0px 0px;
  border-bottom: 0.6px solid black;
  padding: 10px;
  position: relative;
  animation: fadeIn 2s forwards;
  transition-duration: 400ms;
}

#text-container {
  width: 95%;
  height: auto;
  margin: 0 auto;
}

#post-text {
  word-wrap: break-word;
  padding: 7%;
}

#post-info {
  margin-top: 2%;
  color: #575757;
  font-size: 13px;
  letter-spacing: 0.4px;
  font-family: 'Heebo';
  text-align: right;
}
#post-info span a {
  color: #575757;
  margin-right: 5px;
  transition-duration: 200ms;
}
#post-info span a:hover {
  color: #383838;
  text-decoration: underline;
}

/*reply*/
.toggleReply {
  font-size: 15px;
}
#replies-container {
  background-color: #2e2e2e;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 3%;
  margin-bottom: 3%;
  max-width: 65%;
  animation: fadeIn 0.5s forwards;
  transition-duration: 400ms;
}
.reply {
  border-bottom: 0.4px solid floralwhite;
  padding: 10px;
  animation: fadeIn 1.3s forwards;
  transition-duration: 400ms;
}

#replyText {
  color: #e9e9e9;
  word-wrap: break-word;
}

#replyInfo {
  color: #c7c7c7;
  font-size: 13px;
  letter-spacing: 0.4px;
  font-family: 'Heebo';
  text-align: right;
  margin-top: 2%;
}

#replyInfo span a {
  color: #c7c7c7;
  margin-right: 5px;
  transition-duration: 200ms;
}
#replyInfo span a:hover {
  color: #9c9c9c;
  text-decoration: underline;
}

#addReply {
  padding: 10px;
  font-size: 17px;
  color: #e9e9e9;
}

#input-reply {
  padding: 4px;
  font-size: 15px;
  background-color: #575757;
  color: #c7c7c7;
  border-radius: 4px;
  max-width: 60%;
  max-height: 10px;
}

@keyframes fadeIn {
    from {
        opacity: 0.1;
    }
    to {
        opacity: 1;
    }
}

@media only screen and (max-width: 768px){
  #post {
    font-size: 14px;
  }
  #post-info {
    font-size: 10px;
  }

  #replyText {
  font-size: 14px;
  }

  #replyInfo {
    font-size: 10px;
  }

  #input-reply {
    font-size: 14px;
    width: 50%;
  }

  #replyBtn {
    font-size: 15px;
  }
}


</style>
