<template>
<router-link :to="{ name: 'Movie', params: { movieId: movie.id } }">
   <div class="movie-card">
    <h2>{{ movie.title }}</h2>
    <p>{{ setLength(movie.length) }}</p>
    <div class="movie-card__image">
      <img :src="movie.poster_url" alt="movie-image" />
    </div>
    <div class="movie-card__genre">{{movie.genre.name}}</div>
  </div>
  </router-link>
 
  
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
    height: 400px;
    border-radius: 8px;
    padding: 24px;
    background: $cl-white;
    box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
      0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
      0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    flex-grow: 0;
    margin: 15px;
    font-family: $ff-primary;
    color: $cl-dark;
    cursor: pointer;
    transition: 0.5s;

    &:hover{
      box-shadow: 0px 34px 88px rgba(0, 0, 0, 0.09),
      0px 9.36071px 27.4223px rgba(39, 32, 32, 0.064),
      0px 8.59602px 8.18708px rgba(66, 51, 51, 0.096);
    }
  

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
    height: 192px;
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
    height: 371px;
    // max-height: 400px;
  
  }

  .movie_card_image {
    width: 364px;
 
  }
}

@media (min-width: 1200px) {
  .movie-card {
    width: 421px;
    padding: 40px;
    padding-bottom: 50px;
  }

  .movie-card__image {
    width: 341px;
    height: 200px;
    overflow: hidden;
  }
}
</style>