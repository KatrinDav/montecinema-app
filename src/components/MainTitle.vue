<template>
  <h1 :class="titleClasses" :positionType="positionType">
    {{ text }} <span>{{ subText }}</span>
  </h1>
</template>

<script>
export default {
  name: "MainTitle",
  props: {
    text: {
      type: String,
      required: true,
    },
    subText: {
      type: String,
      required: false,
    },
    positionType: {
      type: String,
    }
  },
   computed: {
        titleClasses(){
            return [
                'header-section',
                {'header-section--left': this.positionType === 'left'},
            ]
        }
   }
};
</script>

<style lang="scss">
@media (min-width: 0px) {
  .header-section {
    font-family: $ff-secondary;
    font-size: $fs-large-alt;
    line-height: 49px;
    padding: 35px 0;
    text-align: center;

    & span {
      color: $cl-grey;
      display: block;
    }

    // &--left{
    //    text-align: left;
    // }
  }
  
}

@media (min-width: 1015px) {
  .header-section {
    font-size: $fs-super-large;
    line-height: 100%;
    letter-spacing: -0.01em;
    padding: 40px 0;

    &--left{
       text-align: left;
    }
   
  }
}
@media (min-width: 1280px) {
  .header-section{
      text-align: left;
  }
   
}
</style>