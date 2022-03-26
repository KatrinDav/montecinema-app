<template>
  <main class="login-container">
    <MainTitle
      text="Hi there!"
      subText="Care to log in?"
      class="login-container__title"
    />
    <FormLogin />
  </main>
</template>

<script>
import FormLogin from "../components/FormLogin.vue";
import MainTitle from "../components/MainTitle.vue";
export default {
  name: "LoginPage",
  metaInfo: {
    title: "Login",
  },
  components: { FormLogin, MainTitle },
};
</script>

<style lang="scss">
@media (min-width: 0px) {
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 60px;
    overflow: hidden;
  }
  .login-container__title {
    width: 600px;
    text-align: center;
  }
}
@media (min-width: 932px) {
  .login-container__title {
    text-align: left;
  }
}
</style>
