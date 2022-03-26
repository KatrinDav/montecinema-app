<template>
  <header class="header">
    <div class="header_logo">
      <router-link :to="{ name: 'Home' }">
        <img
          src="../assets/logo.svg"
          alt="logo"
        />
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

    <div class="nav-menu__action">
    <div
      class="nav-menu__action"
      v-if="!isLoggedIn"
    >

      <router-link
        :to="{ name: 'Register' }"
        class="nav-menu__action register"
        exact-active-class="nav-menu__item"
      >
        <BaseButton
          caption="Register"
          buttonType="secondary"
        />
      </router-link>

      <router-link :to="{ name: 'Login' }">
        <BaseButton caption="Login" />
      </router-link>
    </div>

    <div
      class="nav-menu__action"
      v-if="isLoggedIn"
    >
      <BaseButton
        caption="Logout"
        @click="logout"
      />
    </div>

    <div class="mobile-nav"><span></span> <span></span> <span></span></div>
  </header>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
export default {
  name: "TopHeader",
  components: { BaseButton },

  computed: {
    isLoggedIn() {
      return this.$store.getters["isLoggedIn"];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Login" });
    },
  },

};
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @include pageCenter();
  height: 73px;
  margin-top: 37px;
  position: relative;
}

.nav-menu {
  display: none;

  &__action {
    display: none;
  }
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
    align-items: flex-end;
  }

  .nav-menu__item {
    text-decoration: none;
    margin: 0 25px;
    padding-bottom: 10px;
    font-family: $ff-primary;
    color: $cl-grey;
    font-size: $fs-normal;
    position: relative;

    &--active {
      font-weight: bold;
      color: $cl-dark-alt;

      &::after {
        content: "";
        border-bottom: 3px solid $cl-cherry-red;
        position: absolute;
        width: 140%;
        left: -20%;
        bottom: 0;
        margin-bottom: -30px;
      }
    }
  }

  .nav-menu__action {
    display: flex;
    flex-direction: row;
  }

  .nav-menu__action .register {
    text-decoration: none;
    margin-right: 25px;
  }
}
@media (min-width: 1140px) {
  .nav-menu__item {
    margin: 0 35px;
  }
}
</style>
