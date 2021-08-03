<template>
  <img
    v-if="item.poster_path"
    class="image-from-server"
    :src="imageUrl"
    :alt="item.title"
  >
  <img
    v-else
    class="image-from-server image-from-server--no-image"
    :class="{'movie-detail-page' : movieDetailPage}"
    src="@/assets/images/no-image.png"
    :alt="item.title"
  >
</template>

<script>
export default {
  name: 'ImageFromServer',
  props: {
    item: {
      type: Object,
      required: true
    },
    movieDetailPage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imageUrl () {
      return process.env.VUE_APP_IMG_BASE_URL + (this.item.poster_path)
    }
  }
}
</script>

<style scoped lang="scss">
.image-from-server {
  height: 500px;
  object-fit: cover;
  object-position: center top;
  width: 100%;
  &--no-image:not(.cart-list__item__thumbnail) {
    object-fit: none;
    object-position: center;
    &.movie-detail-page{
      height: auto;
    }
  }
}

</style>
