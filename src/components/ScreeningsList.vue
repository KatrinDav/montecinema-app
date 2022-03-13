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

export default {
    name: 'ScreeningsList',
    components: {ScreeningCard},

    data(){
        return{
            errorMsg: '',
        }
    },

    computed:{
        movies(){
             return this.$store.state.movies;
        },
        screenings(){
            return this.$store.state.screenings;
        }
    },

  mounted(){
    this.$store.dispatch('fetchMovies')
    // this.$store.dispatch('fetchScreenings')
  },
}
</script>

<style lang="scss">
.list-wrapper{
    width: 100%;
    margin-top: 40px;
  
}
</style>