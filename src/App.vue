<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      
    }
  },

}
</script>

<style>
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background-image: -webkit-linear-gradient(left, #dddddd, #b4b4b4); /* For Chrome and Safari */
  background-image: -moz-linear-gradient(left, #dddddd, #b4b4b4); /* For old Fx (3.6 to 15) */
  background-image: -ms-linear-gradient(left, #dddddd, #b4b4b4); /* For pre-releases of IE 10*/
  background-image: -o-linear-gradient(left, #dddddd, #b4b4b4); /* For old Opera (11.1 to 12.0) */
  background-image: linear-gradient(to right, #dddddd, #b4b4b4); /* Standard syntax; must be last */

}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.component {
  margin: 0 auto;
  height: 100%;
}

</style>
