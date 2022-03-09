<template>
    <div class="action-wrapper">
        <router-link :to="{ name: 'Home' }">
        <button class="action-wrapper__back">Back</button>
        </router-link>
        <div class="action-wrapper__title">{{name}}</div>
    </div>
</template>

<script>

export default {
    name: 'ActionBar',
    props:{
        name: {
             type: String,
        },
    }
}
</script>

<style lang="scss">
.action-wrapper{
    width: 100%;
    height: 80px;
    padding: 24px;
    display: flex;
    align-items: center;
    background-color: $cl-pink;
    font-family: $ff-primary-alt;
    letter-spacing: 0.015em;
    color: $cl-dark;
    

    &__back{
        border: 2px solid $cl-dark;
        padding: 12px 44px;
        padding-left: 80px;
        border-radius: 24px;
        width: 160px;
        cursor: pointer;
        background-color: inherit;
        font-family: inherit;
        font-size: $fs-small;
        position: relative;
      
    }
    &__back::before{
        content: url('../assets/arrowleft.svg');
        display: block;
        position: absolute;
        left: 10%;
        top: 15%;
      
      
    }

    &__title{
        margin-left: 60px;
    }
}
</style>