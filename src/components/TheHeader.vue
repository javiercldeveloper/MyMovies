<template>
  <header class="header">
    <div class="header__inner">
      <div>
        <router-link
          class="logo"
          :to="{ name: 'Home'}"
        >
          My<span>Movies</span>
        </router-link>
      </div>
      <nav>
        <router-link :to="{ name: 'Search'}">
          <img
            src="../assets/images/search.svg"
            alt="Buscar película"
          >
        </router-link>
        <router-link :to="{ name: 'Cart'}">
          <img
            src="../assets/images/cart.svg"
            alt="Carrito de películas"
          >
          <badge />
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>

import Badge from '@/components/Badge'
export default {
  name: 'TheHeader',
  components: {
    Badge
  }
}
</script>

<style scoped lang="scss">
@import '.././assets/styles/main.scss';

.header {
  background-color: rgba(255,255,255,0.85);
  backdrop-filter: blur(5px);
  border-bottom: 1px solid #ededed;
  height: $header-height;
  position: fixed;
  top: 0;
  width: 100%;
  &__inner {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: $layout-width;
  }
}

.logo {
  color: black;
  display: block;
  font-size: 1.4rem;
  padding: 15px;
  text-decoration: none;
  & > span {
    color: red;
    }
}
nav {
  padding-right: 20px;
  & > a {
    position: relative;
    & img {
      margin-left: 10px;
    }
  }
}

</style>
