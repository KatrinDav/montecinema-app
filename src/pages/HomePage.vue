<template>
  <div class="page-wrapper">
    <section class="main-intro">
      <div class="wrapper">
        <div class="title">
          <MainTitle text="Welcome to the best cinema in Monterail" />
          <p>
            Best movies, best experiences, best people. And all that doesn’t
            exist. Yikes.
          </p>
        </div>
        <BaseButton
          buttonType="primary"
          caption="Book a ticket"
        />

      </div>
      <div class="main_image"></div>
    </section>
    <div class="more-info">
      <p>soon <span>in the cinema</span></p>
      <p
        class="show-items"
        @click="changeVisible"
      >see all</p>
    </div>
    <div class="movies">
      <MovieCard
        v-for="movie in movies"
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
import photo1 from "../assets/predator.png";
import photo2 from "../assets/commando.png";
import photo3 from "../assets/terminator.png";

export default {
  name: "HomePage",
  metaInfo: {
    title: "Home",
  },
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
      movies: [
        {
          id: "1a",
          title: "Predator",
          length: 90,
          poster_url: photo1,
          genre: { id: 1, name: "Action" },
        },
        {
          id: "2b",
          title: "Commando",
          length: 90,
          poster_url: photo2,
          genre: { id: 2, name: "Action" },
        },
        {
          id: "3c",
          title: "Terminator 2",
          length: 90,
          poster_url: photo3,
          genre: { id: 3, name: "Action" },
        },
      ],

      isVisible: false,
    };
  },
  methods: {
    changeVisible() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style lang="scss">
@media (min-width: 0px) {
  .page-wrapper {
    @include pageCenter();
  }
  .main-intro {
    background-color: $cl-pink;
    color: $cl-dark;
    text-align: center;
    padding-bottom: 40px;
    width: 100%;
  }

  .main-intro .title {
    width: 75%;
    margin: 0 auto;
  }

  .main-intro .title p {
    font-family: $ff-primary-alt;
    font-size: $fs-medium;
    line-height: 37px;
    letter-spacing: 1.5;
    padding-bottom: 35px;
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
}

@media (min-width: 932px) {
  .container {
    max-width: 92%;
    margin: 0 auto;
  }
  .main_intro {
    padding-bottom: 65px;
  }

  .main_intro .title {
    width: 70%;
    padding-top: 50px;
    padding-bottom: 45px;
  }

  .main_intro .title h1 {
    font-size: $fs-super-large;
    line-height: 102%;
    letter-spacing: -0.01em;
    padding: 40px 0;
  }

  .main_intro .title p {
    padding-bottom: 10px;
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

  .movies > .movie-card:nth-child(3) {
    display: none;
  }
  .contact-details {
    width: 600px;
    height: 400px;
    padding: 30px;
  }
}

@media (min-width: 1280px) {
  .main_intro {
    height: 95vh;
    max-height: 678px;
    // max-width: 1344px;
    padding-bottom: 0;
    margin: 0 auto;
  }

  .main_intro .wrapper {
    width: 55%;
    padding-left: 80px;
    text-align: left;
  }

  .main_intro .title {
    width: 100%;
    padding-top: 50px;
  }

  .main_intro .title p {
    padding-right: 65px;
  }

  .main_intro .main_image {
    width: 45%;
    background-image: url("../assets/unsplash-AtPWnYNDJnM.jpg");
    background-position: center;
    background-size: cover;
    background-origin: content-box;
  }

  @media (min-width: 1440px) {
    .movies > .movie-card:nth-child(3) {
      display: inline;
    }
  }
}
</style>
