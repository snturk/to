<template>
  <div class="component" id="post">
    <div id="text-container">
      <div id="post-text"> {{text}} </div>
    </div>
    
    <div id="post-info"> <span><router-link :to="'/user/' + username">{{username}}</router-link></span> {{date}}</div>
  </div>
</template>

<script>

export default {
  props: [
    "title", "text", "username", "date"
  ],
  data() {
    return {

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
}


</style>
