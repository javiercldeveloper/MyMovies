<template>
  <infinite-loading
    @infinite="onInfinite"
  >
    <div slot="spinner">
      <spinner />
    </div>
    <div
      slot="no-more"
      class="infinite-slot"
    >
      <p>No hay mas resultados</p>
    </div>
    <div
      slot="no-results"
      class="infinite-slot"
    >
      <p>No hay resultados</p>
    </div>
    <div
      slot="error"
      slot-scope="{ trigger }"
    >
      <p>Se ha producido un error.</p>
      <button
        class="btn"
        @click="trigger"
      >
        Reintentar
      </button>
    </div>
  </infinite-loading>
</template>

<script>
import Spinner from '@/components/Spinner'
import InfiniteLoading from 'vue-infinite-loading'
export default {
  name: 'InfiniteLoader',
  components: {
    Spinner,
    InfiniteLoading
  },
  methods: {
    onInfinite ($state) {
      this.$emit('infinite', $state)
    }
  }
}
</script>

<style scoped>
.infinite-slot {
  margin-top: 20px;
}
</style>
