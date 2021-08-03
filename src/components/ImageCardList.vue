<template>
  <ul :class="gridClass">
    <image-card
      v-for="result in results"
      :key="result.id"
      :item="result"
      :is-category-item="isCategoryList"
    />
  </ul>
</template>

<script>
import ImageCard from '@/components/ImageCard'
export default {
  name: 'ImageCardList',
  components: {
    ImageCard
  },
  props: {
    results: {
      type: Array,
      required: true
    },
    isCategoryList: {
      type: Boolean,
      default: false
    },
    twoItemsPerRow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    gridClass () {
      const myClasses = ['image-card-grid']
      if (this.twoItemsPerRow) {
        myClasses.push('image-card-grid--big')
      }
      return myClasses.join(' ')
    }
  }
}
</script>

<style lang="scss" scoped>
.image-card-grid {
  display: grid;
  gap: 40px;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  padding-top: 30px;

  &--big{
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media (max-width: 56.25em) {
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
  }
}
</style>
