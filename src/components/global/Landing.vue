<template>
  <div class="landing">
    <div class="intro-text">
      <div id="title-landing">
        <h1>{{ title }}</h1>
      </div>
      <p>{{ changed }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "landing",
  props: ["changed", "getProp", "title"],
  mounted() {
    this.getProp();
  },
};
</script>

<style lang="scss">
@import "../../assets/style/variables.scss";
.landing {
  background-image: url("../../assets/images/landing.jpg");
  background-size: cover;
  height: calc(100vh - 64px);
  position: relative;
  .intro-text {
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 320px;
    max-width: 100%;
    text-transform: capitalize;
    h1 {
      margin: 0;
      color: $main-color;
      font-weight: bold;
      font-size: 50px;
    }
    p {
      font-size: 17px;
      line-height: 1.8;
    }
  }
}
</style>
