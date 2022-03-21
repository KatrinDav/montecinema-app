<template>
  <div class="page-wrapper">
    <ActionBar name="Contact us" />
    <header>
      <MainTitle
        text="Contact us"
        positionType="left"
      />
    </header>

    <div class="main-contact">
      <div class="main-contact__map"> </div>

      <div class="main-contact__info">
        <ContactInfo />
      </div>

      <div class="main-contact__links"> </div>
    </div>
  </div>

</template>

<script>
import MainTitle from "../components/MainTitle.vue";
import ActionBar from "../components/ActionBar.vue";
import ContactInfo from "../components/ContactInfo.vue";
export default {
  name: "ContactPage",
  metaInfo: {
    title: "Contact",
  },
  components: { MainTitle, ActionBar, ContactInfo },
};
</script>

<style lang="scss">
.page-wrapper {
  @include pageCenter();
}
.main-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 327px;
  margin: 20px auto;
  background-color: $cl-athens-grey;

  &__map {
    width: 100%;
    height: 284px;
    background-image: url("../assets/map.svg");
    background-position: center;
    &img {
      width: 100%;
      height: 100%;
    }
  }
  &__links {
    width: 327px;
    height: 80px;
    background-image: url("../assets/horizontalIcons.svg");
  }
}

@media (min-width: 1015px) {
  .main-contact {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    &__map {
      width: 50%;
      height: 412px;
    }
    &__links {
      width: 80px;
      height: 412px;
      background-image: url("../assets/verticalIcons.svg");
      background-repeat: none;
    }
  }
}
</style>


