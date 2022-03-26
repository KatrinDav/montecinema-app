<template>
  <label for="select">
    <span class="select__label">Category</span>
    <select
      name="categories"
      class="select"
      @change="$emit('input', $event.target.value)"
    >
      <option
        selected
        value="All"
      >All categories</option>
      <option
        v-for="option in moviesGenres"
        :key="option.id"
        :value="option.name"
      >{{option.name}}</option>

    </select>

  </label>

</template>

<script>
export default {
  name: "SelectInput",

  data() {
    return {
      selected: "All",
    };
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
    moviesGenres() {
      return this.$store.getters.uniqeGenres;
    },
  },
};
</script>

<style lang="scss">
.select__label {
  display: block;
  font-family: $ff-primary-alt;
  font-size: $fs-xs;
  color: $cl-light-red;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-top: 30px;
}

.select {
  appearance: none;
  width: 100%;
  display: block;
  height: 55px;
  border-radius: 8px;
  padding: 0px 24px;
  outline: none;
  border: none;
  background-color: #f7f7f7;
  font-size: $fs-normal;
  font-family: $ff-primary;
  line-height: 21px;
  color: $cl-dark;
}
</style>
