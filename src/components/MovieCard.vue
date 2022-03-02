<template>
  <div class="movie-card">
    <h2>{{ title }}</h2>
    <p>{{ length }}</p>
    <div class="movie-card__image">
      <img :src="image" alt="movie-image" />
    </div>
    <button>Action</button>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    title: {
      type: String,
    },
    length: {
      type: String,
    },
    image: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
@media (min-width: 0px) {
  .movie-card {
    width: 317px;
    min-height: 300px;
    border-radius: 8px;
    padding: 24px;
    background: $cl-white;
    box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
      0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
      0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
    flex-grow: 0;
    margin: 12px 0px;
    font-family: $ff-primary;
    color: $cl-dark;

    h2 {
      font-size: $fs-large;
      font-weight: 700;
    }
  }

  .movie-card__image {
    width: 100%;
    margin-top: 17px;
    img {
      width: 100%;
      /* height: auto; */
      height: 191px;
    }
  }
}

@media (min-width: 932px) {
  .movies-content > .movie-card:nth-child(3) {
    display: none;
  }

  .movie_card {
    width: 440px;
    height: 435px;
  }

  .movie_card_image {
    width: 364px;
  }
}

@media (min-width: 1400px) {
  .movies_content > .movie-card:nth-child(3) {
    display: inline;
  }

  .movie-card {
    width: 421px;
    height: 470px;
    padding: 40px;
    padding-bottom: 50px;
  }

  .movie-card__image {
    width: 341px;
    height: 191px;
    overflow: hidden;
  }
}
</style>