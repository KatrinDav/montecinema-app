<template>
  <div class="movie_card">
    <h2>{{ title }}</h2>
    <div class="movie_card_image">
      <img :src="image" alt="commando image" />
    </div>
    <button>Action</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
@media (min-width: 0px) {
  .movie_card {
    width: 311px;
    border-radius: 8px;
    padding: 24px;
    background: var(--cl-white);
    box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
      0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
      0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
    flex-grow: 0;
    margin: 12px 0px;
    font-family: var(--ff-primary);
    color: var(--cl-dark);
  }

  .movie_card h2 {
    font-size: var(--fs-large);
    font-weight: 700;
  }

  .movie_card_image {
    width: 263px;
    margin-top: 17px;
  }

  .movie_card_image img {
    width: 100%;
    height: auto;
  }

  .movie_card_description p {
    font-size: var(--fs-normal);
    font-weight: 400;
    line-height: 170%;
    letter-spacing: 0.04em;
    padding-top: 17px;
  }
}

@media (min-width: 932px) {
  .movies_content > .movie_card:nth-child(3) {
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
  .movies_content > .movie_card:nth-child(3) {
    display: inline;
  }

  .movie_card {
    width: 421px;
    height: 470px;
    padding: 40px;
    padding-bottom: 50px;
  }

  .movie_card_image {
    width: 341px;
    height: 191px;
    overflow: hidden;
  }
}
</style>