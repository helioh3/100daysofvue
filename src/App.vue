<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2>Now Vuex</h2>
  <br>
  <counter/>
</template>

<script>
import Counter from '@/components/Counter.vue'

import { mapState } from 'vuex'

export default {
  name: 'Vuex',
  components: {
    Counter
  },

  computed: {
    ...mapState({
      // first_name: (state) => {
      //   return state.first_name
      // }
      first_name: state => state.first_name,
      last_name: state => state.last_name
    }),

    fullName () {
      return `${this.first_name} ${this.last_name}`
    }

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
