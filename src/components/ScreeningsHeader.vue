<template>
    <header>
        <h2 :class="headerClasses">Screenings: <br/>
           <span class="screening-title__date">
          {{fullDayName}}
          {{day}}/{{month}}/{{year}}</span>
          </h2>
    </header>
    
</template>

<script>
export default {
    name: 'ScreeningsHeader',

    props: {
        sizeType:{
            type: String,
        },
     },
    
    data(){
    return {
      daysFullName: ['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'],
     
     }
    },
    computed: {
          headerClasses(){
            return [
                'screening-title',
                {'screening-title--large': this.sizeType === 'large'},
                {'screening-title--small': this.sizeType === 'small'},
            ]
        },

    day(){
     const newDate = new Date();
     const day = newDate.getDate();
     if(day < 10){
       return '0'+ day
     }
     return day
    },

    month(){
    const newDate = new Date();
    const month = newDate.getMonth() +1 ;
     if(month < 10){
       return '0' + month
     }
     return month
    },

    year(){
     const newDate = new Date();
     const year = newDate.getFullYear();
     return year;
    },

    fullDayName(){
    const newDate = new Date();
    return this.daysFullName[newDate.getDay()]
   
    },

    },

}
</script>

<style lang="scss">
@media (min-width: 0px) {
    .screening-title{
    font-family: $ff-secondary;
    font-size: $fs-large-alt;
       margin-top: 45px;
   
    &__date{
      color: $cl-grey;
    }

  }
}

@media (min-width: 1030px){
.screening-title{
    font-size: 64px;
 

     &--large{
          font-size: $fs-super-large;
    }

    &--small{
        font-size: 32px;
    }
  }
}
 
</style>