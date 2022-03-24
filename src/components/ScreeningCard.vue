<template>
  <div class="screening-card">
    <div class="screening-card__image">
      <img
        :src="movie.poster_url"
        alt="movie-image"
      />
    </div>
    <div class="screening-card__info">
      <h3 class="screening-card__title">{{movie.title}}</h3>
      <div class="screening-card__details">
        <div class="screening-card__genre">{{movie.genre.name}}</div>
        <div class="screening-card__length">{{setLength(movie.length)}}</div>
      </div>
      <div class="screening-card__date">
        <p
          v-for="item in movieScreeningsForDay"
          :key="item.id"
          today
        >{{item.datetime.slice(11,16)}}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ScreeningCard",
  props: {
    movie: {
      type: Object,
      required: true,
    },
    today: {
      type: String,
    },
  },

  data() {
    return {
      date: this.today,
    };
  },

  computed: {
    movieScreenings() {
      return this.$store.getters.datesScreen(this.movie.id);
    },
    movieScreeningsForDay() {
      return this.movieScreenings.filter((item) => {
        return item.datetime.slice(0, 10) === this.date;
      });
    },
  },

  methods: {
    setLength(inMinutes) {
      const hours = Math.floor(inMinutes / 60);
      const minutes = `${inMinutes % 60}`;

      return `${hours}h ${minutes} min`;
    },
  },
  mounted() {
    this.$root.$on("getDate", (dateTime) => {
      this.date = dateTime;
      console.log(this.date);
    });
  },
};
</script>

<style lang="scss">
@media (min-width: 0px) {
  .screening-card {
    width: 100%;
    height: 172px;
    border-radius: 8px;
    padding: 40px;
    display: flex;
    box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
      0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
      0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
    margin-top: 30px;

    &__image {
      min-width: 68px;
      height: 88px;
      object-fit: contain;
      background-position: center;
      background-size: contain;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &__title {
      font-size: $fs-medium-alt;
      color: $cl-dark;
      font-weight: bold;
    }

    &__info {
      margin-left: 20px;
      font-family: $ff-primary;
    }

    &__details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 165px;
      margin-top: 20px;
    }

    &__genre {
      width: 73px;
      height: 32px;
      border-radius: 24px;
      background-color: $cl-pink;
      padding: 16px;
      color: $cl-light-red;
      font-size: $fs-xs;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__length {
      width: 73px;
      height: 32px;
      font-size: $fs-xs;
      color: $cl-grey;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 15px;
    }

    &__date {
      display: flex;
      margin-top: 15px;

      p {
        margin-right: 20px;
        color: $cl-cherry-red;
        font-family: $ff-primary-alt;
        font-size: $fs-small;
        border: 1px solid $cl-cherry-red;
        padding: 0.6em 1.3em;
        border-radius: 20px;
      }
    }
  }
  @media (min-width: 690px) {
    .screening-card {
      height: 212px;

      &__image {
        width: 98px;
        height: 132px;
      }
    }
  }
}
</style>
