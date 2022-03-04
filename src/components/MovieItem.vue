<template>
  <router-link :to="{ name: 'Movie', params: { movieId: movie.id } }">
    {{ movie.title }}
  </router-link>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>