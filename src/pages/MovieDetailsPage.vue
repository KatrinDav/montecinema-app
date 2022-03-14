<template>
  <div>

    <h1>

    </h1>

    <h2>{{movie.title}}</h2>
    <p>{{movie.description}}</p>
    <p>{{movie.length}}</p>
    <p>{{movie.genre.name}}</p>

    <div>
      <img
        :src="movie.poster_url"
        alt="movie-image"
      >
    </div>

  </div>

</template>

<script>
export default {
  name: "MovieDetailsPage",
  props: {
    movieId: {
      required: true,
    },
  },
  computed: {
    movie() {
      return this.$store.getters.movie(Number(this.movieId));
    },
  },
};
</script>