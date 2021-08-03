<template>
  <li
    class="image-card"
  >
    <router-link :to="route">
      <image-from-server
        class="image-card__image"
        :item="item"
      />
      <div class="image-card__body">
        <span class="image-card__body-title">
          {{ item.title || 'Titulo no disponible' }}
        </span>
      </div>
    </router-link>
  </li>
</template>

<script>
import ImageFromServer from '@/components/ImageFromServer'
export default {
  name: 'ImageCard',
  components: {
    ImageFromServer
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    isCategoryItem: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    route () {
      if (this.isCategoryItem) {
        return { name: 'Category', params: { category: this.item.resource } }
      } else return { name: 'Movie', params: { movieId: this.item.id } }
    }
  }
}
</script>

<style lang="scss">
@import '.././assets/styles/main';
.image-card {
  background: $color-white;
  border: 2px solid #333333;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    cursor: pointer;
  }

  &__image {
    @media (max-width: $tab-port-breakpoint) {
      max-height: 30vh;
    }
  }

  &__body {
    padding: 15px;
    &-title {
      display: block;
      font-weight: $font-weight-bold;
      margin: 0;
      text-align: center;
      @media (max-width: $tab-port-breakpoint) {
        font-size: $font-size-small;
      }
    }
  }
}

</style>
