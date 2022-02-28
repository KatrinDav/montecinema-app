<template>
  <header class="header">
    <div class="header_logo">
      <router-link :to="{ name: 'Home' }">
        <img src="../assets/logo.svg" alt="logo" />
      </router-link>
    </div>
    <nav class="nav-menu">
      <router-link
        :to="{ name: 'Movies' }"
        class="nav-menu__item"
        exact-active-class="nav-menu__item--active"
      >
        Movies
      </router-link>
      <router-link
        :to="{ name: 'Screening' }"
        class="nav-menu__item"
        exact-active-class="nav-menu__item--active"
      >
        Screenings
      </router-link>
      <router-link
        :to="{ name: 'Contact' }"
        class="nav-menu__item"
        exact-active-class="nav-menu__item--active"
      >
        Contact us
      </router-link>
    </nav>
    <div class="mobile-nav"><span></span> <span></span> <span></span></div>
    <div class="desktop-nav">
      <a href="#" class="register">Register</a>
      <button class="btn_login">Login</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "TopHeader",
};
</script>

<style lang="scss">
@media (min-width: 0px) {
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 92%;
    margin: 0 auto;
    height: 73px;
    margin-top: 27px;
    position: relative;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-nav {
    position: absolute;
    top: 8px;
    right: 10px;
    height: 18px;
    width: 24px;
    cursor: pointer;
    z-index: 100;
  }

  .mobile-nav span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1.5px;
    background-color: $cl-mid-grey;
  }

  .mobile-nav span:nth-child(1) {
    top: 0;
  }

  .mobile-nav span:nth-child(2) {
    top: calc(50% - 1.5px);
  }

  .mobile-nav span:nth-child(3) {
    bottom: 0;
  }

  .main_intro {
    display: flex;
    width: 100%;
  }
}

@media (min-width: 932px) {
  body {
    padding-bottom: 50px;
  }

  .mobile-nav {
    display: none;
  }

  .nav-menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-menu__item {
    text-decoration: none;
    margin: 0 35px;
    font-family: $ff-primary;
    color: $cl-grey;
    margin-top: -20px;
    font-size: $fs-normal;

    &--active {
      font-weight: bold;
    }
  }

  .desktop-nav {
    display: flex;
    flex-direction: row;
  }

  .desktop-nav .register {
    margin-right: 20px;
    padding: 16px 30px;
    text-decoration: none;
    font-family: $ff-primary-alt;
    font-weight: 500;
    color: $cl-cherry-red;
    letter-spacing: 0.015em;
  }

  .desktop-nav .btn_login {
    width: 110px;
    height: 48px;
    padding: 16px 30px;
    border-radius: 24px;
    background-color: $cl-cherry-red;
    border: none;
    color: $cl-white;
    font-family: $ff-primary-alt;
    font-size: $fs-small;
    font-weight: 500;
    line-height: 100%;
    cursor: pointer;
    transition: 0.3s;
  }

  .desktop-nav .btn_login:hover {
    background-color: $cl-red;
  }
}
</style>