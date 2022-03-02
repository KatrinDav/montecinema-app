<template>
  <h1 class="header-section">{{ text }}</h1>
</template>

<script>
export default {
  name: "MainTitle",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@media (min-width: 0px) {
  .header-section {
    font-family: $ff-secondary;
    font-size: $fs-large-alt;
    line-height: 49px;
    padding: 35px 0;
  }
}
</style>