<template>
  <div id="app">
    <p>User Name : {{name}}</p>
    <button type="button" name="button" class="btn btn-primary"
      @click = "resetName">
      Reset Name
    </button>
    <br><br>

    <!-- <button type="button" name="button" class="btn btn-primary"
      @click = "resetAge">
      Reset Age
    </button> -->
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
      }
    },
    methods: {
      resetName(){
        this.name = "Aaron";
        this.$emit("nameReset", this.name);
      },
      // resetAge(){
      //   //Sends event to  event bus
      //   eventBus.$emit("resetUsersAge", 45);
      // }
    }
  }
</script>
