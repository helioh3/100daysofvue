<template>
  <div class="input-group mb-3">
    <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
        @click.stop.prevent="remove"
    >-
    </button>
    <input
        :value="$store.state.counter"
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
        @click.stop.prevent="add"
    >+
    </button>
  </div>
</template>

<script>
export default {
  name: 'Counter',

  data() {
    return {};
  },

  methods: {
    add () {
      this.$store.commit('add', 2)
    },
    remove () {
      this.$store.commit('remove', 2)
    }
  },
};
</script>
