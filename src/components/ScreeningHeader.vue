<template>
    <header>
        <h2 :class="headerClasses">Screenings: <br/>
           <span class="screening-title__date">
          {{getFullDayName()}}
          {{ getDayInfo()}}/{{getMonthInfo()}}/{{getYearInfo()}}</span></h2>
    </header>
    
</template>

<script>
export default {
    name: 'ScreeningHeader',

    props: {
        sizeType:{
            type: String,
        },
     },
    
    data(){
    return {
      daysFullName: ['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'],
      day: '',
      month: '',
      year: '',
    }
  },
    computed: {
          headerClasses(){
            return [
                'screening-title',
                {'screening-title--large': this.sizeType === 'large'},
                {'screening-title--small': this.sizeType === 'small'},
            ]
        }
    },

  methods:{
    getFullDayName(){
    const newDate = new Date();
    return this.daysFullName[newDate.getDay()]
   
    },
    getDayInfo(){
     const newDate = new Date();
     this.day = newDate.getDate();
     if(this.day < 10){
       return '0'+ this.day
     }
     return this.day
    },
    getMonthInfo(){
    const newDate = new Date();
     this.month = newDate.getMonth() +1 ;
     if(this.month < 10){
       return '0' + this.month
     }
     return this.month
    },
    getYearInfo(){
     const newDate = new Date();
     this.year = newDate.getFullYear();
     return this.year
    }
  }
}
</script>

<style lang="scss">
@media (min-width: 0px) {
    .screening-title{
    font-family: $ff-secondary;
    font-size: $fs-large-alt;
    margin-left: 25px;
    &__date{
      color: $cl-grey;
    }

  }
}

@media (min-width: 932px){
.screening-title{
    font-size: 64px;
    margin-top: 45px;

     &--large{
          font-size: $fs-super-large;
    }

    &--small{
        font-size: 32px;
    }
  }
}

 

 
</style>