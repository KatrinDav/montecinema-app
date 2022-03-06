<template>
  <div class="movie-card">
    <h2>{{ title }}</h2>
    <p>{{ length }}</p>
    <div class="movie-card__image">
      <img :src="image" alt="movie-image" />
    </div>
    <button class="movie-card__action">Action</button>
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
      type: Number
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
    width: 327px;
    height: 450px;
  max-height: 450px;
    border-radius: 8px;
    padding: 24px;
    background: $cl-white;
    box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
      0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
      0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 0;
    margin: 15px;
    font-family: $ff-primary;
    color: $cl-dark;

    h2 {
      font-size: $fs-large;
      font-weight: 700;
    }
    p{
      font-family: $ff-primary;
      font-size:$fs-xs;
      color: $cl-grey;
      padding: 13px 0;
    }
    &__action{
      margin-top: 23px;
    }
  }

  .movie-card__image {
    width: 100%;
    height: 291px;
    overflow: hidden;
    margin-top: 17px;
    background-origin: content-box;
    background-position: center;
    background-size: contain;
    img {
      width: 100%;
      height: auto;
     
    }
  }
}

@media (min-width: 932px) {

  .movie_card {
    width: 440px;
    height: 435px;
  }

  .movie_card_image {
    width: 364px;
  }
}

@media (min-width: 1400px) {

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