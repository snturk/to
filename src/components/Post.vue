<template>
  <div class="component" id="post">
    <div id="text-container">
      <div id="post-text"> {{text}} </div>
    </div>
    
    <div id="post-info"> <span>{{username}}</span>, {{date}}</div>
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
  border-bottom: 0.3px solid rgb(255, 255, 255);
  position: relative;
  animation: fadeIn 2s forwards;
  transition-duration: 400ms;
}

#text-container {
  width: 100%;
  height: auto;
  margin: 0 auto;
}

#post-text {
  word-wrap: break-word;
  padding: 30px;
}

#post-info {
  margin-top: 2%;
  color: #cccccc;
  font-size: 13px;
  letter-spacing: 0.4px;
  font-family: 'Heebo';
  position:absolute;
  bottom:4px;
  right:4px;
}
#post-info span {
  color: #cccccc;
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
