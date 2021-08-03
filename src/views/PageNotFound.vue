<template>
  <div class="layout">
    <div class="not-found__container">
      <img
        class="not-found__image"
        src="@/assets/images/not-found.jpg"
        alt="Página no encontrada"
      >
      <h2>
        Página no encontrada
      </h2>
      <p>
        Lo sentimos, parece que la página que buscas no existe.
      </p>
      <router-link
        :to="{name: 'Home'}"
        class="btn"
      >
        Ir a inicio
      </router-link>
    </div>
  </div>
</template>
<script>

export default {
  name: 'PageNotFound'
}
</script>

<style scoped lang="scss">
.not-found {
  &__container {
    margin: 30px auto 0 auto;
    max-width: 640px;
    text-align: center;
  }
  &__image{
    width: 100%;
    height: auto;
  }
}

</style>
