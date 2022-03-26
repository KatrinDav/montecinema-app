<template>
  <div class="page-wrapper">
    <ActionBar name="Screenings" />
    <ScreeningsHeader sizeType="large" />
    <div class="screen-action">
      <div class="screen-action__days">
        <DateButton
          v-for="item in setScreeningsDays"
          :caption="item.name"
          :valueDate="item.date"
          :key="item.name"
        />

      </div>
      <div class="screen-action__select">
        <label for="select">
          <span class="select__label">Movie</span>
          <select
            name="movies"
            class="select"
            v-model="selected"
          >
            <option value="All">All movies</option>
            <option
              v-for="option in options"
              :key="option"
              :value="option"
            >{{option}}</option>

          </select>

        </label>
      </div>
    </div>
    <section class="list-wrapper">
      <ScreeningCard
        v-for="movie in filteredByTitle"
        :key="movie.id"
        :movie="movie"
      />

    </section>
  </div>
</template>


<script>
import ScreeningsHeader from "../components/ScreeningsHeader.vue";
import ScreeningCard from "../components/ScreeningCard.vue";
import ActionBar from "../components/ActionBar.vue";
import DateButton from "../components/DateButton.vue";
export default {
  name: "ScreeningPage",
  components: {
    ScreeningsHeader,
    ScreeningCard,
    ActionBar,
    DateButton,
  },

  data() {
    return {
      selected: "All",
    };
  },
  computed: {
    options() {
      return this.$store.getters.titles;
    },
    movies() {
      return this.$store.state.movies;
    },
    screenings() {
      return this.$store.state.screenings;
    },

    filteredByTitle() {
      const filteredTitle = this.movies.filter(
        (movie) => movie.title === this.selected
      );
      return this.selected === "All" ? this.movies : filteredTitle;
    },

    setScreeningsDays() {
      const today = new Date();
      const screeningsDays = [];
      screeningsDays.push({
        date: today.toISOString().slice(0, 10),
        name: "Today",
      });

      for (let i = 1; i < 6; i++) {
        const date = new Date(today.setDate(today.getDate() + 1));
        screeningsDays.push({
          date: date.toISOString().slice(0, 10),
          name: date.toDateString().slice(0, 3),
        });
      }
      console.log(screeningsDays);
      return screeningsDays;
    },
  },

  mounted() {
    this.$store.dispatch("fetchMovies");
  },
};
</script>

<style lang="scss" >
.page-wrapper {
  width: 92%;
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 30px;
}

.list-wrapper {
  width: 100%;
  margin-top: 40px;
}

.screen-action {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.select__label {
  display: block;
  font-family: $ff-primary-alt;
  font-size: $fs-xs;
  color: $cl-light-red;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-top: 30px;
}

.select {
  appearance: none;
  width: 400px;
  display: block;
  height: 55px;
  border-radius: 8px;
  padding: 0px 24px;
  outline: none;
  border: none;
  background-color: #f7f7f7;
  font-size: $fs-normal;
  font-family: $ff-primary;
  line-height: 21px;
  color: $cl-dark;
}
</style>
