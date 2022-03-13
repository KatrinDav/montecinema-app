<template>
<label for="select">
    <span class="select__label">Category</span>
    <select name="categories" class="select"
    @change="$emit('input', $event.target.value)" >
    <option selected value="All">All categories</option>
    <option value="Thriller">Thriller</option>
    <option value="Comedy">Comedy</option>
    <option value="Fantasy">Fantasy</option>
    <option value="Sci-Fi">Sci-Fi</option>
    <option value="Romance">Romance</option>
    <option value="Family">Family</option>
    <option value="Horror">Horror</option>
    <option value="Documentary">Documentary</option>
    <option value="Action">Action</option>
</select>

</label>

    
</template>

<script>
// import axios from 'axios';
// import {BASE_URL} from '../helpers/index';
export default {
    name: 'SelectInput',

    data(){
        return {
            options: [],
            errorMsg:'',
            selected: 'All',
        }
    },

    // methods:{
    // async fetchData(){
    //   try{
    //      const response = await axios.get(`${BASE_URL}/movie_genres`);
    //      console.log(response.data)
    //      this.options = response.data;
    //   } catch{
    //       this.errorMsg = 'Something went wrong...'
    //       console.log(this.errorMsg)
    //   }
     
    // },
  
//   },
//   mounted(){
//     this.fetchData()
//   },
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