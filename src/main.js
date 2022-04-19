import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

    const store = createStore({
      state () {
        return {
          first_name: 'Helio',
          last_name: 'Brito',
          email: 'helioh3@gmail.com',
          counter: 0
        }
      },

      mutations: {
        add (state, value) {
          state.counter += value
        },
        remove (state, value) {
          if(state.counter <= 1)
            return
          state.counter -= value
        }
      }
    })
createApp(App)
    .use(store)
    .mount('#app')
