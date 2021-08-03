<template>
  <div class="error-container">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.error-container {
  border: 2px solid red;
  color: red;
  display: flex;
  justify-content: center;
  margin: 30px 0;
  padding-top: 20px;
  width: 100%;
}
</style>
