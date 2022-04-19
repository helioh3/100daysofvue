<template>
  <div class="input-group mb-3">
    <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
        @click.stop.prevent="remove(2)"
    >-
    </button>
    <input
        :value="counter"
        type="text"
        class="form-control"
        placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
    >
    <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        @click.stop.prevent="add(2)"
    >+
    </button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Counter',

  data() {
    return {};
  },

  computed: {
    ...mapState ({
        counter: (state) => {
          return state.counter
        }
    })
  },

  methods: {
    ...mapMutations([
      'add',
      'remove'
    ]),
    // add () {
    //   this.$store.commit('add', 2)
    // },
    // remove () {
    //   this.$store.commit('remove', 2)
    // }
  },
};
</script>
