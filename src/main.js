import Vue from 'vue'
import App from './App.vue'
import UserDetail from './UserDetail'
import UserAge from './UserAge'

//Use app-server to reference Home page
Vue.component('app-detail', UserDetail);
Vue.component('app-age', UserAge);


//Event bus to centralize data being passed
//between components
// export const eventBus = new Vue();


new Vue({
  el: '#app',
  render: h => h(App)
})
