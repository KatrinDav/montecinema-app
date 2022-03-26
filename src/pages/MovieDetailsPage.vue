<template>
  <main class="page-wrapper">
    <ActionBar name="Movies" />
    <section class="movie-details">
      <div class="movie-details__info">
        <h1 class="movie-details__title">{{movie.title}}</h1>
        <div class="movie-details__detail">
          <p class="genre">{{movie.genre.name}}</p>
          <p>{{setReleaseYear(movie.release_date)}} </p>
          <p>{{setLength(movie.length)}}</p>
        </div>
        <p class="movie-details__description">
          {{movie.description}}
        </p>
      </div>
      <div class="movie-details__image">
        <picture>
          <img
            :src="movie.poster_url"
            alt="movie poster"
          >
        </picture>
      </div>
    </section>
    <section class="movie-screenings">
      <ScreeningsHeader sizeType="small" />
      <DateButton caption="Today" />
    </section>
  </main>

</template>

<script>
import ActionBar from "../components/ActionBar.vue";
import ScreeningsHeader from "../components/ScreeningsHeader.vue";
import DateButton from "../components/DateButton.vue";

export default {
  name: "MovieDetailsPage",
  metaInfo: {
    title: this.movie.title,
  },

  components: { ActionBar, ScreeningsHeader, DateButton },
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
  methods: {
    setLength(inMinutes) {
      const hours = Math.floor(inMinutes / 60);
      const minutes = `${inMinutes % 60}`.slice(-2);
      return `${hours}h ${minutes} min`;
    },

    setReleaseYear(date) {
      return date.slice(0, 4);
    },
  },
};
</script>



<style lang="scss">
.page-wrapper {
  @include pageCenter();
  overflow: hidden;
}
.movie-details {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;

  &__image {
    width: 90%;
    max-width: 320px;
    background-color: pink;
    margin-top: 35px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  &__title {
    font-size: $fs-large-alt;
    font-family: $ff-secondary;
    font-weight: 600;
    letter-spacing: -1%;
    margin-bottom: 40px;
  }
  &__description {
    font-size: $fs-medium;
    font-family: $ff-primary-alt;
    line-height: 37px;
    letter-spacing: 1.5%;
    font-weight: 400;
    color: $cl-dark;
    margin-top: 40px;
  }
  &__detail {
    display: flex;
    align-items: flex-end;

    p {
      font-family: $ff-primary;
      font-size: $fs-xs;
      color: $cl-grey;
      padding: 16px;
    }
  }
  .genre {
    width: 83px;
    border-radius: 24px;
    background-color: $cl-pink;
    padding: 16px;
    color: $cl-light-red;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.movie-screenings {
  width: 90%;
  margin: 0 auto;
}
@media (min-width: 932px) {
  .movie-details {
    flex-direction: row;
    width: 100%;

    &__info {
      width: 63%;
    }

    &__title {
      font-size: $fs-super-large;
    }
    &__image {
      margin-top: 0;
      height: 400px;

      img {
        object-fit: cover;
      }
    }
  }

  .movie-screenings {
    width: 100%;
  }
}
</style>
