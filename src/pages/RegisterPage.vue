<template>
  <main class="register-container">
    <MainTitle
      text="Ahoy yo!"
      subText="Care to register?"
      class="register-container__title"
    />
    <FormRegister />
  </main>
</template>

<script>
import MainTitle from "../components/MainTitle.vue";
import FormRegister from "../components/FormRegister.vue";

export default {
  name: "RegisterPage",
  metaInfo: {
    title: "Register Page Nr 1",
  },
  components: { MainTitle, FormRegister },
};
</script>

<style lang="scss">
@media (min-width: 0px) {
  .register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 60px;
    overflow: hidden;
  }
  .register-container__title {
    width: 605px;
    text-align: center;
  }
}
@media (min-width: 932px) {
  .register-container__title {
    text-align: left;
  }
}
</style>
