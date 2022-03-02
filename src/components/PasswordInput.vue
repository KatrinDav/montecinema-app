<template>
  <label class="password-input">
    <span class="password-input__label">{{ label }}</span>
    <div class="input-wrapper">
      <input
        class="password-input__input"
        type="password"
        placeholder="Enter your password"
        :value="value"
        @input="$emit('input', $event.target.value)"
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
  },
};
</script>

<style lang="scss">
.input-wrapper {
  position: relative;
  width: 472px;
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
.password-input__label {
  display: block;
  font-family: $ff-primary-alt;
  font-size: $fs-xs;
  color: $cl-light-red;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-top: 50px;
}

.password-input__input {
  width: 472px;
  height: 56px;
  border-radius: 8px;
  padding: 0px 24px;
  justify-content: space-between;
  outline: none;
  border: none;
  background-color: #f7f7f7;
  font-size: $fs-normal;
  font-family: $ff-primary;
  line-height: 21px;
}
</style>