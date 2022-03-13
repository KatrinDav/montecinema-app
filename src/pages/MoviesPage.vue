<template>
<section class="page-wrapper">
  <ActionBar name="Movies"/>
  <MainTitle text="All the movies" positionType="left"/>
  <div class="searchBar">
    <div class="searchBar__input">
       <BaseInput  
        type="text"
        label="search"
        placeholder="What are you looking for?"
        v-model="query"/>
    </div>
    <div class="searchBar__select">
        <SelectInput v-model="selected"/>
    </div>
  </div>
 
  <div class="movies-container">
 
     <MovieCard
      v-for="movie in filteredByGenre"
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
import SelectInput from '../components/SelectInput.vue'
import ActionBar from '../components/ActionBar.vue';
import axios from 'axios';
import {BASE_URL} from '../helpers/index';

export default {
  components: { MainTitle, MovieCard, BaseInput, ActionBar, SelectInput },

  data(){
  return {
    movies: [],
    errorMsg: '',
    query: '',
    selected: 'All',
    
  }
  },

  computed:{
    filteredByQuery(){
    return this.movies.filter(movie => movie.title.toLowerCase().includes(this.query.toLowerCase()));
    },

    filteredByGenre(){
      const filteredGenre = this.filteredByQuery.filter(movie => movie.genre.name === this.selected);

      return this.selected === 'All' ? this.filteredByQuery : filteredGenre;
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
 
  
};

</script>


<style lang="scss">

.page-wrapper{
    @include pageCenter();
  
   }
.movies-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
}

.searchBar{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


   &__input{
    width: 100%;
   }

  &__select{
    width: 100%;
    
  }
}

@media(min-width: 785px){
  .searchBar{
   flex-direction: row;

    &__input{
    width: 66%;
    margin-right: 30px;
    }

     &__select{
    width: 33%;
    
  }
  }
}
</style>