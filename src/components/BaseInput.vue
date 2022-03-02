<template>
  <label class="base-input">
    <span class="base-input__label">{{ label }}</span>
    <input
      class="base-input__input"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: "BaseInput",
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
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.base-input__label {
  display: block;
  font-family: $ff-primary-alt;
  font-size: $fs-xs;
  color: $cl-light-red;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.base-input__input {
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