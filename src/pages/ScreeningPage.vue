<template>
  <div class="page-wrapper">
    <ActionBar name="Screenings" />
    <ScreeningsHeader sizeType="large" />
    <ScreeningsList />
  </div>
</template>


<script>
import ScreeningsHeader from "../components/ScreeningsHeader.vue";
import ScreeningsList from "../components/ScreeningsList.vue";
import ActionBar from "../components/ActionBar.vue";
export default {
  name: "ScreeningPage",
  metaInfo: {
    title: "Screenings",
  },
  components: { ScreeningsHeader, ScreeningsList, ActionBar },
};
</script>

<style lang="scss">
.page-wrapper {
  width: 92%;
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 30px;
}
</style>
