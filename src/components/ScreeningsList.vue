<template>
    <section class="list-wrapper">
        <ScreeningCard
            v-for="movie in movies"
             :key="movie.id"
             :movie="movie"
        />
      
    </section>
</template>

<script>
import ScreeningCard from './ScreeningCard.vue';
import {BASE_URL} from '../helpers/index';
import axios from 'axios';

export default {
    name: 'ScreeningsList',
    components: {ScreeningCard},

    data(){
        return{
            movies: [],
            errorMsg: '',
        }
    },

    methods:{
    async fetchData(){
      try{
         const response = await axios.get(`${BASE_URL}/movies`);
         console.log(response.data)
         this.movies = response.data;
      } catch{
          this.errorMsg = 'Something went wrong...'
          console.log(this.errorMsg)
      }
     
    },
  
  },

  mounted(){
    this.fetchData()
  },
}
</script>

<style lang="scss">
.list-wrapper{
    width: 100%;
    margin-top: 40px;
  
}
</style>