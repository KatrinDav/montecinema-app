<template>
  <section class="movies-content">
    <MovieCard
      v-for="movie in movies"
      :key="movie.id"
      :title="movie.title"
      :lenght="movie.lenght"
      :image="movie.image"
    />
  </section>
</template>

<script>
import MovieCard from "./MovieCard.vue";
import photo1 from "../assets/predator.png";
import photo2 from "../assets/commando.png";
import photo3 from "../assets/terminator.png";

export default {
  name: "MoviesList",
  components: { MovieCard },
  data() {
    return {
      movies: [
        {
          id: "1a",
          title: "Predator",
          length: "1 h 30 min",
          image: photo1,
        },
        {
          id: "2v",
          title: "Commando",
          length: "1 h 30 min",
          image: photo2,
        },
        {
          id: "3x",
          title: "Terminator 2",
          length: "1 h 30 min",
          image: photo3,
        },
      ],
    };
  },
};
</script>

<style>
@media (min-width: 0px) {
  .movies-content {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    margin: 20px auto;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 932px) {
  .movies-content {
    flex-direction: row;
    justify-content: space-between;
    width: 900px;
    margin-top: 40px;
  }

  .movies-content > .movie-card:nth-child(3) {
    display: none;
  }
}

@media (min-width: 1400px) {
  .movies-content {
    justify-content: space-around;
    width: 93%;
    max-width: 1440px;
    background-color: yellow;
  }

  .movies-content > .movie-card:nth-child(3) {
    display: inline;
  }
}
</style>