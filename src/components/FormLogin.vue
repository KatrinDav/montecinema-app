<template>
  <form
    class="form-wrapper"
    @submit.prevent="onSubmit"
  >
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
    <button
      type="submit"
      class="form-wrapper__button"
      :disabled="!isFormValid"
    >
      Log in
    </button>
  </form>
</template>

<script>
/* eslint-disable */
import PasswordInput from "./PasswordInput.vue";
import BaseInput from "./BaseInput.vue";
export default {
  name: "FormLogin",
  components: {
    PasswordInput,
    BaseInput,
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
    async onSubmit() {
      if (this.isFormValid) {
        console.log(this.email, this.password);
        this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        this.password = "";
        this.email = "";
        this.isPasswordTouched = false;
        this.isEmailTouched = false;

        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style lang="scss">
@media (min-width: 0px) {
  .form-wrapper {
    padding: 25px;

    &__button {
      display: inline-block;
      width: 200px;
      border-radius: 64px;
      padding: 15px;
      font-family: $ff-primary-alt;
      font-size: $fs-normal;
      letter-spacing: 1.5%;
      background-color: $cl-cherry-red;
      color: $cl-white;
      border: none;
      cursor: pointer;
      margin-top: 40px;
      transition: 0.3s;

      &:hover {
        background-color: $cl-red;
      }

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
    }
  }
}

@media (min-width: 932px) {
  .form-wrapper {
    width: 600px;
    height: 420px;
    border-radius: 24px;
    padding: 64px;
    padding-top: 30px;
    margin-top: 40px;
    box-shadow: 0px 4px 22px 0px rgba($cl-dark, 0.15);
  }
}
</style>