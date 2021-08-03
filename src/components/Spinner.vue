<template>
  <div class="spinner__container">
    <div class="spinner__image" />
  </div>
</template>

<script>
export default {
  name: 'Spinner'
}
</script>

<style scoped lang="scss">
.spinner {
  &__container {
    display: flex;
    justify-content: center;
    margin: 30px 0;
    width: 100%;
  }
  &__image {
    animation: spin 2s linear infinite;
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    height: 120px;
    width: 120px;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
