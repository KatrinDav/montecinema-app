<template>
  <label class="base-input">
    <span class="base-input__label">{{ label }}</span>
    <input
      class="base-input__input"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event.target.blur)"
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
@media (min-width: 0px) {
  .base-input__label {
    display: block;
    font-family: $ff-primary-alt;
    font-size: $fs-xs;
    color: $cl-light-red;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 20px;
    margin-top: 30px;
  }

  .base-input__input {
    min-width: 331px;
    height: 55px;
    border-radius: 8px;
    padding: 0px 24px;
    outline: none;
    border: none;
    background-color: #f7f7f7;
    font-size: $fs-normal;
    font-family: $ff-primary;
    line-height: 21px;

    &:focus {
      border: 1px solid $cl-light-blue;
      background-color: $cl-blue;
    }

    
  }
}
@media (min-width: 582px) {
  .base-input__input {
    width: 100%;
    min-width: 472px;
  }

}
</style>