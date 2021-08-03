<template>
  <div class="layout">
    <hero-section
      subtitle="Selecciona tu favorita"
      :title="title"
      background-image="listado"
    />
    <movies-list
      :resource="resource"
    />
  </div>
</template>

<script>

import MoviesList from '@/components/MoviesList'
import EMovieCategories from '@/model/EMovieCategories'
import HeroSection from '@/components/HeroSection'

export default {
  name: 'PageCategory',
  components: {
    HeroSection,
    MoviesList
  },
  props: {
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    title () {
      return EMovieCategories[this.category.toUpperCase()].title
    },
    resource () {
      return `movie/${EMovieCategories[this.category.toUpperCase()].resource}`
    }
  }
}
</script>
