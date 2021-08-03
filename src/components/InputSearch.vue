<template>
  <div class="search__box">
    <input
      v-model="query"
      placeholder="Busca una película"
      type="search"
      autocomplete="off"
      class="search__input"
      @input="sendInputValue"
    >
  </div>
</template>

<script>
export default {
  name: 'InputSearch',
  data () {
    return {
      query: null,
      debounceTimeout: null
    }
  },
  methods: {
    sendInputValue ($event) {
      if (this.debounceTimeout) clearTimeout(this.debounceTimeout)
      this.debounceTimeout = setTimeout(() => {
        this.$emit('input', $event.target.value)
      }, 600)
    }
  }
}
</script>

<style scoped lang="scss">
@import '.././assets/styles/main';

.search {
  &__box {
    text-align: center;
    padding: 20px 0;
  }
  &__input {
    border-color: $color-secondary;
    border-width: 0 0 2px;
    font-size: $font-size-maxi;
    width: 100%;

    &:focus {
      border-color: $color-primary;
      outline: none;
    }
  }
}

</style>
