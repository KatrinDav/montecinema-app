<template>
  <section class="movies_content"></section>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        {
          id: "1a",
          title: "Predator",
          length: "1 h 30 min",
          image: "../predator.png",
        },
        {
          id: "2v",
          title: "Commando",
          length: "1 h 30 min",
          image: "../commando.png",
        },
        {
          id: "3x",
          title: "Terminator 2",
          length: "1 h 30 min",
          image: "../terminator.png",
        },
      ],
    };
  },
};
</script>

<style>
</style>