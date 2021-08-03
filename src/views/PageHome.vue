<template>
  <div class="layout">
    <hero-section
      subtitle="Selecciona una categoría"
      title="La película que buscas está aquí"
      background-image="categories"
    />
    <spinner v-if="loading" />
    <error-message
      v-else-if="error"
      :message="error"
    />
    <image-card-list
      v-else
      is-category-list
      two-items-per-row
      :results="results"
    />
  </div>
</template>

<script>

import fetchTmdbData from '@/api/tmdbApiService'
import HeroSection from '@/components/HeroSection'
import ImageCardList from '@/components/ImageCardList'
import EMovieCategories from '@/model/EMovieCategories'
import Spinner from '@/components/Spinner'
import ErrorMessage from '@/components/ErrorMessage'

export default {
  name: 'Home',
  components: {
    HeroSection,
    ImageCardList,
    Spinner,
    ErrorMessage
  },
  data () {
    return {
      loading: true,
      error: null,
      results: []
    }
  },
  computed: {
    selectedFilmIds () {
      return this.results.map(film => film.id)
    }
  },
  created () {
    this.fetchImagesForCategories()
  },
  methods: {
    fetchImagesForCategories () {
      Promise.all(Object.keys(EMovieCategories).map(category => {
        return fetchTmdbData(`movie/${EMovieCategories[category].resource.toLowerCase()}`)
      }))
        .then(results => {
          results.forEach((result, index) => {
            this.pushImageInResults(result.data.results, Object.keys(EMovieCategories)[index])
          })
        })
        .then(() => { this.loading = false })
        .catch((error) => {
          if (error && error.response) {
            this.error = error.response.data.status_message
          } else this.error = 'Lo sentimos, se ha producido un error'
          this.loading = false
        })
    },
    getRandomNumber () {
      return Math.floor(Math.random() * 19)
    },
    pushImageInResults (results, category) {
      const randomResultNumber = this.getRandomNumber()
      if (!this.selectedFilmIds.includes(results[randomResultNumber].id)) {
        this.results.push({
          resource: EMovieCategories[category].resource,
          title: EMovieCategories[category].title,
          poster_path: results[randomResultNumber].poster_path,
          id: results[randomResultNumber].id
        })
      } else this.pushImageInResults(results, category)
    }
  }
}
</script>
