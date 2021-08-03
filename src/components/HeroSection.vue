<template>
  <section
    class="hero"
    :style="{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), ${getHeroImagePath()}`}"
  >
    <h1 class="hero-title">
      {{ title }}
    </h1>
    <p class="hero-subtitle">
      {{ subtitle }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    backgroundImage: {
      type: String,
      default: 'categories'
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  },
  methods: {
    getHeroImagePath () {
      return 'url(' + require(`../assets/images/${this.backgroundImage}.jpg`) + ')'
    }
  }
}
</script>

<style lang="scss">
@import '.././assets/styles/main';
.hero {
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  color: $color-white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 250px;
  padding: 0 20px;
  text-align: center;
}
.hero-title {
  margin: 0;
}
.hero-subtitle {
  font-size: clamp(1.3rem, 2vw, 1.5rem);
  margin-top: 10px;
}
</style>
