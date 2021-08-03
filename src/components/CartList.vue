<template>
  <ul
    class="cart-list"
  >
    <li
      v-for="item in items"
      :key="item.id"
      class="cart-list__item"
    >
      <router-link
        :to="{name: 'Movie', params: {movieId: item.id}}"
        class="cart-list__item__details"
      >
        <image-from-server
          :item="item"
          class="cart-list__item__thumbnail"
        />
        <p class="cart-list__item__title">
          {{ item.title }}
        </p>
      </router-link>
      <div
        class="cart-list__item__remove-button"
        @click="removeFromCart(item.id)"
      >
        <img
          src="../assets/images/remove.svg"
          alt="Borrar película del listado"
        >
      </div>
    </li>
  </ul>
</template>
<script>

import ImageFromServer from '@/components/ImageFromServer'

export default {
  name: 'CartList',
  components: {
    ImageFromServer
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeFromCart (itemId) {
      this.$emit('removeItem', itemId)
    }
  }
}
</script>

<style scoped lang="scss">
@import '.././assets/styles/main';

.cart-list{
  margin-top: 30px;
  &__item {
    align-items: center;
    box-shadow:0 0 5px rgba(0,0,0,.25);
    display: flex;
    margin-top: 20px;
    padding: 20px;
    justify-content: space-between;
    &__details {
      align-items: center;
      display: flex;
    }
    &__title {
      font-size: clamp(1rem, 3vw, 1.5rem);
      margin-bottom: 0;
      margin-left: 2rem;
      font-weight: $font-weight-bold;
    }
    &__thumbnail {
      height: auto;
      max-width: 50px;
    }
    &__remove-button {
      margin-left: 10px;
      cursor: pointer;
    }
  }
}
</style>
