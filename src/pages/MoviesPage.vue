<template>
  <section class="page-wrapper">
    <ActionBar name="Movies" />
    <MainTitle
      text="All the movies"
      positionType="left"
    />
    <div class="search-bar">
      <div class="search-bar__input">
        <BaseInput
          type="text"
          label="search"
          placeholder="What are you looking for?"
          v-model="query"
        />
      </div>
      <div class="search-bar__select">
        <SelectInput v-model="selected" />
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
import MovieCard from "../components/MovieCard.vue";
import BaseInput from "../components/BaseInput.vue";
import SelectInput from "../components/SelectInput.vue";
import ActionBar from "../components/ActionBar.vue";

export default {
  name: "MoviesPage",
  metaInfo: {
    title: "Movies",
    titleTemplate: "%s | Monte Cinema",
  },
  components: { MainTitle, MovieCard, BaseInput, ActionBar, SelectInput },

  data() {
    return {
      query: "",
      selected: "All",
    };
  },

  computed: {
    movies() {
      return this.$store.state.movies;
    },
    filteredByQuery() {
      return this.movies.filter((movie) =>
        movie.title.toLowerCase().includes(this.query.toLowerCase())
      );
    },

    filteredByGenre() {
      const filteredGenre = this.filteredByQuery.filter(
        (movie) => movie.genre.name === this.selected
      );

      return this.selected === "All" ? this.filteredByQuery : filteredGenre;
    },
  },

  async mounted() {
    this.$store.dispatch("fetchMovies");
  },
};
</script>


<style lang="scss">
.page-wrapper {
  @include pageCenter();
}
.movies-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;

  a {
    text-decoration: none;
  }
}

.search-bar {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__input {
    width: 100%;
  }

  &__select {
    width: 100%;
  }
}

@media (min-width: 785px) {
  .search-bar {
    flex-direction: row;

    &__input {
      width: 66%;
      margin-right: 30px;
    }

    &__select {
      width: 33%;
    }
  }
}
</style>
