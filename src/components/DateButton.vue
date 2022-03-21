<template>
  <button
    class="date-btn"
    valueDate
    @click="showDate"
  >
    {{caption}}
  </button>
</template>
<script>
export default {
  name: "DateButton",
  props: {
    caption: {
      type: String,
      required: true,
    },
    valueDate: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dt: this.valueDate,
    };
  },
  methods: {
    showDate() {
      this.$root.$emit("getDate", this.dt);
    },
  },
};
</script>
<style lang="scss">
.date-btn {
  max-width: 136px;
  height: 46px;
  border-radius: 64px;
  padding: 0 30px;
  margin-right: 7px;
  margin-top: 15px;
  font-family: $ff-primary-alt;
  font-size: $fs-normal;
  color: $cl-dark;
  background-color: $cl-white;
  cursor: pointer;
}
</style>
