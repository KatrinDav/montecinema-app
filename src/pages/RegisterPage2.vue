<template>
  <main class="register-container">
    <MainTitle
      text="Great!"
      subText="Now your name"
      class="register-container__title"
    />

    <FormName />

  </main>
</template>

<script>
import MainTitle from "../components/MainTitle.vue";
import FormName from "../components/FormName.vue";

export default {
  name: "RegisterPage2",
  components: { MainTitle, FormName },
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