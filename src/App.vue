<template>
  <div class="container">
    <MainHeader />
    <WelcomePage />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import WelcomePage from "./components/WelcomePage.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    WelcomePage,
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

.container {
  background-color: $cl-white;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 30px;
}
</style>
