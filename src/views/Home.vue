<template>
  <div class="home">
    <section class="hero">
      <div class="hero-text container">
        <h4>Sort Algorithm</h4>
        <h2>
          Visualizer
        </h2>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {}
};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("../assets/hero-bg.png");
  background-attachment: fixed;
  position: relative;
  height: 100vh;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align:right;
    h4 {
      text-transform: uppercase;
      font-size: 30px;
      padding-bottom: 4px;
    }

    h2 {
      font-size: 80px;
      @media (min-width: 550px) {
        font-size: 80px;
      }
    }
  }
}
</style>
