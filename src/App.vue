<template>
  <div id="app">
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

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Fonts families */
  --ff-primary: "Roboto", sans-serif;
  --ff-primary_alt: "Roboto Mono", monospace;
  --ff-secondary: "Eczar", serif;

  /* Fonts sizes */
  --fs-xs: 14px;
  --fs-small: 16px;
  --fs-normal: 18px;
  --fs-medium: 22px;
  --fs-medium_alt: 24px;
  --fs-large: 36px;
  --fs-large_alt: 48px;
  --fs-super-large: 80px;

  /* Colors */
  --cl-white: #ffffff;
  --cl-white_alt: #e5e5e5;
  --cl-pink: #fef6f6;
  --cl-light-blue: #2f80ed;
  --cl-blue: rgba(47, 128, 237, 0.1);
  --cl-cherry-red: #ec1115;
  --cl-red: #a60c0e;
  --cl-light-red: #f47073;
  --cl-light_grey: #f0f0f0;
  --cl-grey: #85868d;
  --cl_mid_grey: #5d5d67;
  --cl-dark: #343541;
  --cl-dark_alt: #292a33;
}

body {
  background-color: var(--cl-white);
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 30px;
}

#app {
  background-color: #ffffff;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 30px;
}
</style>
