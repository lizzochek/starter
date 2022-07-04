<template>
  <v-app class="d-flex">
    <header>Try my counter</header>

    <v-btn
      :color="counterColor"
      depressed
      elevation="7"
      outlined
      rounded
      large
      @click="increaseCounter"
      >{{ counter }}</v-btn
    >
  </v-app>
</template>

<script>
export default {
  name: 'CounterComp',
  data() {
    return { counter: 0 };
  },
  computed: {
    counterColor() {
      return this.counter < 10 ? 'primary' : 'success';
    },
  },
  methods: {
    increaseCounter() {
      this.counter += 1;
    },
  },
};
</script>

<style scoped lang="scss">
.d-flex {
  @include flex-container-style();
}

header {
  @include header-style();
}

.v-btn {
  margin: 50px;
  width: 150px;
  align-self: center;
}
</style>
