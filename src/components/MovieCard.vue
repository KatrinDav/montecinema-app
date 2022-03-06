<template>
  <div class="movie-card">
    <h2>{{ movie.title }}</h2>
    <p>{{ setLength(movie.length) }}</p>
    <div class="movie-card__image">
      <img :src="movie.poster_url" alt="movie-image" />
    </div>
    <div class="movie-card__genre">{{movie.genre.name}}</div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods:{
    setLength(inMinutes){
      const hours = Math.floor(inMinutes/60);
      const minutes = `${inMinutes%60}`.slice(-2);

      return `${hours}h ${minutes} min`

    }
  }
};
</script>

<style lang="scss">
@media (min-width: 0px) {
  .movie-card {
    width: 327px;
    height: 339x;
    max-height: 400px;
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
    &__genre{
      margin-top: 23px;
      width: 83px;
      height: 32px;
      border-radius: 24px;
      background-color: $cl-pink;
      padding: 16px;
      color: $cl-light-red;
      font-size:$fs-xs;
      display: flex;
      align-items: center;
      justify-content: center;
      
    }
  }

  .movie-card__image {
    width: 100%;
    height: 191px;
    overflow: hidden;
    margin-top: 17px;
    background-origin: border-box;
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
    width: 444px;
    height: 371x;
    max-height: 400px;
  
  }

  .movie_card_image {
    width: 364px;
  }
}

@media (min-width: 1400px) {
  .movie-card {
    width: 421px;
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