<template>
  <div id="app">

    <button type="button" name="button" class="btn btn-warning"
    @click="changeName">
      Change my name
    </button>
    <!-- Colon make name dynamic or you can use v-bind-->
    <app-detail :name="name" ></app-detail>
    <app-age ></app-age>
    <!-- @nameReset is a listener for an update from the child
    $event is the data that is being sent up from the child -->
    <!-- <app-detail :name="name" @nameReset="name = $event"></app-detail> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: "Aaron"
    }
  },
  methods: {
    changeName(){
      this.name = "Betty"
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
