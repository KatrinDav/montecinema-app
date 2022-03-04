<template>
  <label class="base-input">
    <span class="base-input__label">{{ label }}</span>
    <div class="input-wrapper">
      <input
        class="base-input__input"
        :type="type"
        placeholder="Enter your password"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur', $event.target.blur)"
      />
      <span class="input-wrapper__icon"> </span>
    </div>
  </label>
</template>

<script>
export default {
  name: "PasswordInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "password",
    },
  },

  // methods: {
  //   showPassword() {
  //     this.$emit("show-password");
  //   },
  // },
};
</script>

<style lang="scss">
@media (max-width: 0px) {
  .input-wrapper {
    position: relative;
    max-width: 472px;
  }
  .input-wrapper__icon {
    content: url("../assets/eye.svg");
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    z-index: 10;
    right: 0px;
    bottom: 18px;
    cursor: pointer;
  }
}
</style>