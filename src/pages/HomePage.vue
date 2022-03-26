<template>
  <div class="page-wrapper">
    <section class="main-intro">

      <div class="title">
        <h1>
          Welcome to the best cinema in Monterail
        </h1>
        <p>
          Best movies, best experiences, best people. And all that doesn’t
          exist. Yikes.
        </p>
        <BaseButton
          buttonType="primary"
          caption="Book a ticket"
        />
      </div>

      <div class="main-image">
      </div>

    </section>
    <div class="more-info">
      <p>soon <span>in the cinema</span></p>
      <p
        class="show-items"
        @click="changeVisible"
      >{{setVisibility}}</p>
    </div>
    <div class="movies">
      <MovieCard
        v-for="movie in firstThreeMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <section
      class="screening"
      v-if="isVisible"
    >
      <ScreeningsHeader />

      <ScreeningsList />
    </section>

    <section class="contact">
      <MainTitle text="Contact us" />
      <div class="contact-details">
        <ContactInfo />
      </div>
    </section>

  </div>
</template>

<script>
import MainTitle from "../components/MainTitle.vue";
import BaseButton from "../components/BaseButton.vue";
import ScreeningsHeader from "../components/ScreeningsHeader.vue";
import ScreeningsList from "../components/ScreeningsList.vue";
import MovieCard from "../components/MovieCard.vue";
import ContactInfo from "../components/ContactInfo.vue";

export default {
  name: "HomePage",
  components: {
    MainTitle,
    BaseButton,
    ScreeningsHeader,
    ScreeningsList,
    MovieCard,
    ContactInfo,
  },

  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    changeVisible() {
      this.isVisible = !this.isVisible;
    },
  },
  computed: {
    firstThreeMovies() {
      return this.$store.state.movies.slice(0, 3);
    },
    setVisibility() {
      return this.isVisible ? "hide all" : "see all";
    },
  },
};
</script>

<style lang="scss">
.page-wrapper {
  @include pageCenter();
}
.main-intro {
  background-color: $cl-pink;
  color: $cl-dark;
  text-align: center;
  padding-bottom: 40px;
  width: 100%;

  .title {
    width: 75%;
    margin: 0 auto;

    h1 {
      font-family: $ff-secondary;
      font-size: $fs-large-alt;
      line-height: 49px;
      padding-top: 50px;
      padding-bottom: 35px;
    }

    p {
      font-family: $ff-primary-alt;
      font-size: $fs-medium;
      line-height: 37px;
      letter-spacing: 1.5;
      padding-bottom: 35px;
    }
  }
}

.more-info {
  width: 92%;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  p {
    font-family: $ff-primary-alt;
    font-size: $fs-medium;
    font-weight: 700;
    color: $cl-dark;
    text-transform: uppercase;

    &:nth-child(2) {
      color: $cl-cherry-red;
    }

    span {
      display: none;
    }
  }
}
.showItems {
  cursor: pointer;
}

.movies {
  @include flexCenter();
  flex-direction: column;
  margin-top: 50px;

  a {
    text-decoration: none;
  }
}

.contact {
  width: 100%;
  @include flexCenter();
  flex-direction: column;
}
.contact-details {
  width: 400px;
  height: 350px;
  background-color: $cl-athens-grey;
}

@media (min-width: 902px) {
  .main-intro {
    padding-bottom: 65px;
    text-align: left;

    .title {
      padding-bottom: 45px;
      width: 60%;
      margin-left: 80px;

      h1 {
        font-size: $fs-super-large;
        font-family: $ff-secondary;
        line-height: 102%;
        letter-spacing: -0.01em;
        padding: 50px 0;
        padding-top: 50px;
      }
      p {
        padding-bottom: 50px;
      }
    }
  }

  .more-info p span {
    display: inline;
  }

  .more-info {
    width: 100%;
  }

  .movies {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .movies > a:nth-child(3) {
    display: none;
  }
  .contact-details {
    width: 600px;
    height: 400px;
    padding: 30px;
  }
}

@media (min-width: 1200px) {
  .main-intro {
    height: 95vh;
    max-height: 678px;
    padding-bottom: 0;
    margin: 0 auto;
    display: flex;

    .title {
      padding-top: 40px;
      padding-right: 65px;
    }

    .main-image {
      width: 40%;
      background-image: url("../assets/unsplash-AtPWnYNDJnM.jpg");
      background-position: center;
      background-size: cover;
      background-origin: content-box;
    }
  }

  @media (min-width: 1440px) {
    .movies > .movie-card:nth-child(3) {
      display: inline;
    }
  }
}
</style>
