<template>
<label for="select">
    <span class="select__label">Category</span>
    <select name="categories" class="select"
    @change="$emit('input', $event.target.value)" >
     <option selected value="All">All categories</option>
     <option v-for="option in options" :key="option.id" :value="option.value">{{option.value}}</option>

   </select>

</label>

    
</template>

<script>

export default {
    name: 'SelectInput',

    data(){
        return {
            options: [
                {id: 1, value:'Thriller'},
                {id: 2, value: 'Comedy'},
                {id: 3, value: 'Fantasy'},
                {id: 4, value: 'Sci-Fi'},
                {id: 5, value: 'Romance'},
                {id: 6, value: 'Family'},
                {id: 7, value: 'Horror'},
                {id: 8, value: 'Documentary'},
                {id: 9, value: 'Action'},

            ],
            selected: 'All',
        }
    },
}
</script>

<style lang="scss">

.select__label {
    display: block;
    font-family: $ff-primary-alt;
    font-size: $fs-xs;
    color: $cl-light-red;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 20px;
    margin-top: 30px;
   
  }

  .select{
    appearance: none;
    width: 100%;
    display: block;
    height: 55px;
    border-radius: 8px;
    padding: 0px 24px;
    outline: none;
    border: none;
    background-color: #f7f7f7;
    font-size: $fs-normal;
    font-family: $ff-primary;
    line-height: 21px;
    color: $cl-dark;


  }


</style>