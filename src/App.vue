<template>
  <div class="container">
    <TopHeader />
    <router-view />
  </div>
</template>

<script>
import TopHeader from "./components/TopHeader.vue";

export default {
  name: "App",
  metaInfo: {
    title: "Monte Cinema",
    titleTemplate: "%s | Monte Cinema",
  },
  components: {
    TopHeader,
  },

  created() {
    this.$store.dispatch("restoreAuthSession");
  },
};
</script>

<style lang="scss">
@import "@/styles/index.scss";

body {
  background-color: $cl-white;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 30px;
}
</style>
