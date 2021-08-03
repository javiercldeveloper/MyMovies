<template>
  <span
    v-if="itemsInCart"
    class="badge"
  >
    {{ itemsInCart }}
  </span>
</template>

<script>
export default {
  name: 'Badge',
  computed: {
    itemsInCart () {
      return this.$store.getters.cartMoviesIds.length
    }
  }
}
</script>

<style scoped lang="scss">
@import '.././assets/styles/main';
.badge {
  align-items: center;
  background-color: $color-secondary;
  border-radius: 15px;
  color: $color-white;
  display: flex;
  height: 15px;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  position: absolute;
  right: -.8rem;
  top: -1.2rem;
  width: 15px;
}
</style>
