<template>
  <form
    class="form-wrapper"
    @submit.prevent="onSubmit"
  >
    <BaseInput
      type="text"
      label="first name"
      placeholder="e.g. Jessica"
      v-model="firstName"
      @blur="isFirstNameTouched = true"
    />
    <div class="error">{{ firstNameError }}</div>

    <BaseInput
      type="text"
      label="last name"
      placeholder="e.g. Walton"
      v-model="lastName"
      @blur="isLastNameTouched = true"
    />
    <div class="error">{{ lastNameError }}</div>

    <BaseInput
      type="date"
      label="date of birth"
      placeholder="DD/MM/YYYY"
      v-model="birthDate"
      @blur="isBirthDateTouched = true"
    />
    <div class="error">{{ birthDateError }}</div>
    <p class="hint">You should be minimum 18 years old</p>

    <div class="checkbox">
      <input
        type="checkbox"
        id="checkbox"
        v-model="checked"
      />
      <label for="checkbox">I accept Privacy Policy</label>

    </div>
    <div class="form-wrapper__action">
      <router-link :to="{ name: 'Login' }">
        <BaseButton
          caption="Log in instead"
          buttonType="secondary"
        />
      </router-link>
      <button
        type="submit"
        class="form-wrapper__button"
        :disabled="!isFormValid"
      >
        Register
      </button>
    </div>
  </form>
</template>

<script>
/* eslint-disable */
import BaseInput from "./BaseInput.vue";
import BaseButton from "./BaseButton.vue";
export default {
  name: "FormLogin",
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      birthDate: "",
      checked: false,
      isFirstNameTouched: false,
      isLastNameTouched: false,
      isBirthDateTouched: false,
    };
  },
  computed: {
    firstNameError() {
      if (!this.isFirstNameTouched) {
        return "";
      }
      if (!this.firstName) {
        return "First name is required!";
      }
    },

    lastNameError() {
      if (!this.isLastNameTouched) {
        return "";
      }
      if (!this.lastName) {
        return "Last name is required!";
      }
    },

    calculateAge() {
      const today = new Date();
      const birthDate = new Date(this.birthDate);
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age >= 18) {
        return true;
      } else {
        return false;
      }
    },

    birthDateError() {
      if (!this.isBirthDateTouched) {
        return "";
      }
      if (!this.birthDate) {
        return "Last name is required!";
      }
      if (!this.calculateAge) {
        return "You are too young...";
      }
    },

    isFormValid() {
      return !!(
        this.firstName &&
        this.lastName &&
        this.birthDate &&
        this.checked
      );
    },
  },
  methods: {
    onSubmit() {
      if (this.isFormValid) {
        this.firstName = "";
        this.lastName = "";
        this.birthDate = "";
        this.checked = false;
        this.isFirstNameTouched = false;
        this.isLastNameTouched = false;
        this.isBirthDateTouched = false;
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
  .hint {
    font-size: $fs-xs;
    color: $cl-dark;
    font-family: $ff-primary;
    margin-top: 12px;
    letter-spacing: 0.04em;
  }

  .error {
    font-size: $fs-xs;
    font-family: $ff-primary;
    color: $cl-cherry-red;
  }

  .checkbox {
    margin-top: 30px;

    label {
      padding-left: 7px;
      font-size: $fs-normal;
      font-family: $ff-primary;
      color: $cl-dark-alt;
    }
    input {
      border-color: $cl-athens-grey;
      width: 20px;
      height: 20px;
      border-radius: 18px;
    }
  }
}

@media (min-width: 932px) {
  .form-wrapper {
    width: 600px;
    min-height: 420px;
    border-radius: 24px;
    padding: 64px;
    padding-top: 30px;
    margin-top: 40px;
    box-shadow: 0px 4px 22px 0px rgba($cl-dark, 0.15);

    &__action {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 20px;
    }
  }
}
</style>