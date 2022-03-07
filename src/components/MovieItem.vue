<template>
<div > 
  <router-link :to="{ name: 'Movie', params: { movieId: movie.id } }">
   <h1>
     {{movie.title}}
   </h1>
    </router-link>
  
</div>

</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
    movieId:{
      type: Number,
      required: true,
    }
  },
};
</script>