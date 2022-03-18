<template>
  <button class="date-btn">
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
}
</style>