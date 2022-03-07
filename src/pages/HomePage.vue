<template>
  <div>
    <section class="main_intro">
      <div class="wrapper">
        <div class="title">
          <MainTitle text="Welcome to the best cinema in Monterail" />
          <p>
            Best movies, best experiences, best people. And all that doesn’t
            exist. Yikes.
          </p>
        </div>

        <button class="btn_large">Book a ticket</button>
      </div>

      <div class="main_image"></div>
    </section>

  </div>
</template>

<script>
import MainTitle from "../components/MainTitle.vue";
export default {
  name: "HomePage",
  components: {
    // MoviesList,
    MainTitle,
  },
};
</script>

<style lang="scss">
@media (min-width: 0px) {
  .main_intro {
    background-color: $cl-pink;
    color: $cl-dark;
    text-align: center;
    padding-bottom: 40px;
    width: 100%;
  }

  .main_intro .title {
    width: 75%;
    margin: 0 auto;
  }

  .main_intro .title h1 {
    font-family: $ff-secondary;
    font-size: $fs-large-alt;
    line-height: 49px;
    padding: 35px 0;
  }

  .main_intro .title p {
    font-family: $ff-primary-alt;
    font-size: $fs-medium;
    line-height: 37px;
    letter-spacing: 1.5;
    padding-bottom: 35px;
  }

  .btn_large {
    display: block;
    width: 310px;
    height: 64px;
    border-radius: 30px;
    padding: 20px, 40px, 20px, 40px;
    margin: 0 auto;
    background-color: $cl-cherry-red;
    color: $cl-white;
    font-family: $ff-primary-alt;
    font-weight: 500;
    font-size: $fs-medium-alt;
    cursor: pointer;
    border: none;
    transition: 0.3s;
  }

  .btn_large:hover {
    background-color: $cl-red;
  }

  .btn_large:active {
    background-color: $cl-red;
    border: 5px solid $cl-light-red;
    outline: 5px solid $cl-light-red;
    outline-offset: -5px;
  }

  .more_info {
    width: 92%;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }

  .more_info p {
    font-family: $ff-primary-alt;
    font-size: $fs-medium;
    font-weight: 700;
    color: $cl-dark;
    text-transform: uppercase;
  }

  .more_info p:nth-child(2) {
    color: $cl-cherry-red;
  }

  .more_info p span {
    display: none;
  }
}

@media (min-width: 932px) {
  .main_intro {
    padding-bottom: 65px;
    width: 92%;
    margin: 0 auto;
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

  .more_info p span {
    display: inline;
  }

  .btn_large {
    margin-bottom: 40px;
  }
}

@media (min-width: 1280px) {
  .main_intro {
    height: 95vh;
    max-height: 678px;
    max-width: 1344px;
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

  .btn_large {
    margin-left: 0;
  }
}
</style>