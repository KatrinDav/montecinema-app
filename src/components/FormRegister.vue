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
    <div class="error-info">{{ emailError }}</div>
    <PasswordInput
      label="password"
      v-model="password"
      @blur="isPasswordTouched = true"
    />
    <div class="error-info">{{ passwordError }}</div>
    <div class="form-wrapper__hints">
      <p :class="[{red: !passwordLength && isPasswordTouched}, {green: passwordLength}]">At least 8 characters</p>
      <p :class="[{red: !passwordLetter && isPasswordTouched}, {green: passwordLetter}]">At least one letter</p>
      <p :class="[{red: !passwordDigit && isPasswordTouched}, {green: passwordDigit}]">At least one digit</p>
    </div>
    <div class="form-wrapper__action">
      <router-link :to="{ name: 'Login' }">
        <BaseButton
          caption="Log in instead"
          buttonType="secondary"
        />
      </router-link>
      <router-link :to="{ name: 'Register-Next' }">
        <BaseButton
          caption="Next step"
          type="submit"
          :disabled="!isFormValid"
        />
      </router-link>
    </div>

  </form>
</template>

<script>
/* eslint-disable */
import PasswordInput from "./PasswordInput.vue";
import BaseInput from "./BaseInput.vue";
import BaseButton from "../components/BaseButton.vue";

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
    passwordLength() {
      return this.password.length >= 8;
    },
    passwordLetter() {
      return /[a-zA-Z]/.test(this.password);
    },
    passwordDigit() {
      return /[0-9]/.test(this.password);
    },

    isPasswordValid() {
      if (this.passwordLength && this.passwordLetter && this.passwordDigit) {
        return true;
      } else {
        return false;
      }
    },

    emailError() {
      if (!this.isEmailTouched) {
        return "";
      }
      if (!this.email) {
        return "Email is required!";
      }
      if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,9}/.test(this.email)) {
        return "Email is invalid!";
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
      return !!this.email && this.password;
    },
  },
  methods: {
    onSubmit() {
      if (this.isFormValid) {
        console.log(this.email, this.password);
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
.red {
  color: $cl-cherry-red;
}
.green {
  color: green;
}
.error-info {
  color: $cl-cherry-red;
  font-family: $ff-primary;
  font-size: $fs-xs;
  margin-top: 14px;
}

.form-wrapper {
  padding: 25px;
  &__hints {
    margin-top: 15px;
    font-size: $fs-xs;
    font-family: $ff-primary;
    line-height: 24px;
    letter-spacing: 0.04em;
    color: $cl-dark;
  }
}
.button {
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
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

    &__action {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 35px;
    }
  }
}
</style>