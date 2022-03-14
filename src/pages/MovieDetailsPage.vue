<template>

  <main>
    <ActionBar name="Movies" />
    <section class="movie-details">
      <div class="movie-details__info">
        <h1 class="movie-details__title">{{movie.title}}</h1>
        <div class="movie-details__detail">
          <p class="genre">{{movie.genre.name}}</p>
          <p>1987</p>
          <p>{{movie.length}}</p>
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
      <DateButton caption="Tue" />
      <DateButton caption="Wed" />
      <DateButton caption="Thu" />
      <DateButton caption="Fri" />
      <DateButton caption="Sat" />
      <DateButton caption="San" />
    </section>
  </main>

</template>

<script>
import ActionBar from "../components/ActionBar.vue";
import ScreeningsHeader from "../components/ScreeningsHeader.vue";
import DateButton from "../components/DateButton.vue";

export default {
  name: "MovieDetailsPage",
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
};
</script>



<style lang="scss">
.movie-details {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  &__info {
    width: 90%;
  }

  &__image {
    width: 345px;
    min-width: 345px;

    background-color: pink;
    object-fit: cover;
    background-size: cover;
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
    // background-color: #fff;
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
    //   height: 32px;
    border-radius: 24px;
    background-color: $cl-pink;
    padding: 16px;
    color: $cl-light-red;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (min-width: 932px) {
  .movie-details {
    flex-direction: row;

    &__info {
      width: 63%;
    }

    &__title {
      font-size: $fs-super-large;
    }
    &__image {
      margin-top: 0;
    }
  }
}

@media (min-width: 1280px) {
  .movie-details__image {
    min-width: 521px;
  }
}
</style>