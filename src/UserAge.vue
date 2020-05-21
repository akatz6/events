<template>
  <div>
    <p>User Age : {{age}}</p>

  </div>
</template>

<script>
  // Import eventBus from main.js
  import { eventBus } from './main';
  export default {
    //Has to match the name of the variable
    props: {
      // Validate name to make sure it is a String
      // You will get a warning in your console letting you know
      // that you have something other then a string
      name: [String]
    },
    data () {
      return {
        age: 30
      }
    },
    methods: {

    },
    // created(){
    //     eventBus.$on("resetUsersAge", (age) => this.age=age)
    // }
  }
</script>
