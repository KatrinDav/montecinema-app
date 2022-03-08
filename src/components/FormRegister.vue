<template>
  <form class="form-wrapper" @submit.prevent="onSubmit">
    <BaseInput
      type="email"
      label="email"
      placeholder="Enter your email address"
      v-model="email"
      @blur="isEmailTouched = true"
    />
    <div>{{ emailError }}</div>
    <PasswordInput
      label="password"
      v-model="password"
      @blur="isPasswordTouched = true"
    />
    <div>{{ passwordError }}</div>
    <div class="form-wrapper__hints">
        <p>At least 8 characters</p>
        <p>At least one letter</p>
        <p>At least one digit</p>
    </div>
    <div class="form-wrapper__action">
      <BaseButton caption="Log in instead" buttonType="secondary"/>
      <BaseButton caption="Next step"/>
    </div>
   
  </form>
</template>

<script>
/* eslint-disable */
import PasswordInput from "./PasswordInput.vue";
import BaseInput from "./BaseInput.vue";
import BaseButton from '../components/BaseButton.vue';
export default {
  name: "FormLogin",
  components: {
    PasswordInput,
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      password: "",
      email: "",
      isPasswordTouched: false,
      isEmailTouched: false,
    };
  },
  computed: {
    emailError() {
      if (!this.isEmailTouched) {
        return "";
      }
      if (!this.email) {
        return "Email is required!";
      }
    },

    passwordError() {
      if (!this.isPasswordTouched) {
        return "";
      }
      if (!this.password) {
        return "Password is required!";
      }
    },

    isFormValid() {
      if (this.email && this.password) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    onSubmit() {
      if (this.isFormValid) {
        this.password = "";
        this.email = "";
        this.isPasswordTouched = false;
        this.isEmailTouched = false;
      }
    },
  },
};
</script>

<style lang="scss">
@media (min-width: 0px) {
  .form-wrapper {
    padding: 25px;
    &__hints{
        margin-top: 15px;
        font-size: $fs-xs;
        font-family: $ff-primary;
        line-height: 24px;
        letter-spacing: 0.04em;
        color: $cl-dark;

        }
     }
}

@media (min-width: 932px) {
  .form-wrapper {
    width: 600px;
    min-height: 490px;
    border-radius: 24px;
    padding: 64px;
    padding-top: 30px;
    margin-top: 40px;
    box-shadow: 0px 4px 22px 0px rgba($cl-dark, 0.15);

    &__action{
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 35px;

    }
  }
}
</style>