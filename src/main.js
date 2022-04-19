import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

    const store = createStore({
      state () {
        return {
          first_name: 'Helio',
          last_name: 'Brito',
          email: 'helioh3@gmail.com'
        }
      },

      mutation: {
        updateName () {

        }
      }
    })
createApp(App)
    .use(store)
    .mount('#app')
