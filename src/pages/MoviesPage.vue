<template>
<section>
  <MainTitle text="All the Movies" />
  <div class="searchBar">
    <BaseInput  
      type="text"
      label="search"
      placeholder="Search for..."
      v-model="query"/>
  </div>
  <div class="movies-container">
     
     <MovieCard
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />

   
  </div>

  
</section>
  
</template>

<script>
import MainTitle from "../components/MainTitle.vue";
import MovieCard from '../components/MovieCard.vue';
import BaseInput from '../components/BaseInput.vue';
import axios from 'axios';

export default {
  components: { MainTitle, MovieCard, BaseInput },

  data(){
  return {
    movies: [],
    errorMsg: '',
    query: '',
  }
  },

  computed:{
    findMovies(){
    const foundMovies = this.movies.filter(movie => movie.title.toLowerCase()
    .includes(this.query.toLowerCase()));
     return foundMovies;
    }
  },

  methods:{
    async fetchData(){
      try{
         const response = await axios.get('http://localhost:3000/movies');
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
  
};

</script>


<style lang="scss">
.movies-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  align-items: center;
  width: 97%;
  max-width: 1440px;
  margin: 0 auto;
}
</style>