<template>
<section>
  <MainTitle text="All the Movies" />
  
  <div class="movies-container">
     <MovieCard
      v-for="movie in movies"
      :key="movie.id"
      :title="movie.title"
      :length="movie.length"
      :image="movie.poster_url"
    />
  </div>
    
 
</section>
  
</template>

<script>
import MainTitle from "../components/MainTitle.vue";
import MovieCard from '../components/MovieCard.vue';
import axios from 'axios';

export default {
  components: { MainTitle, MovieCard },

  data(){
  return{
    movies: [],
    errorMsg: '',
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
     
    }
  },
  mounted(){
    this.fetchData()
  }
};

</script>


<style lang="scss">
.movies-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  align-items: center;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
}
</style>