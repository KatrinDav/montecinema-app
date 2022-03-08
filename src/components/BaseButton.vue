<template>
    <button :class="buttonClasses" @click.prevent="$emit('click')" :type="type">{{caption}}</button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        buttonType:{
            type: String,
            default: 'primary'
        },
        caption:{
             type: String,
        },
        type: {
            type: String,
            default: 'button'
        }
    },
    computed: {
        buttonClasses(){
            return [
                'base-button',
                {'base-button--primary': this.buttonType === 'primary'},
                {'base-button--secondary': this.buttonType === 'secondary'},
                {'base-button--large': this.buttonType === 'large'}
            ]

        }
    }

}
</script>

<style lang="scss">

.base-button{
    height: 48px;
    padding: 16px 30px;
    border-radius: 24px;
    border: none;
    font-family: $ff-primary-alt;
    font-size: $fs-small;
    font-weight: 500;
    line-height: 100%;
    cursor: pointer;
    transition: 0.3s;


    &--primary{
         background-color: $cl-cherry-red;
         color: $cl-white;

        &:hover{
        background-color: $cl-red;
     }
    }

    &--secondary{
        background-color: $cl-white;
        color: $cl-cherry-red;
        letter-spacing: 0.015em;
    }

    &--large{
         width: 310px;
         height: 64px;
         border-radius: 30px;
         padding: 20px, 40px, 20px, 40px;
         font-weight: 500;
         font-size: $fs-medium-alt;
          background-color: $cl-cherry-red;
         color: $cl-white;

           &:hover{
            background-color: $cl-red;
          }
      }
}

</style>