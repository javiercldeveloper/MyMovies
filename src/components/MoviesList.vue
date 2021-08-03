<template>
  <div>
    <image-card-list
      v-if="movies.length"
      :results="movies"
    />
    <infinite-loader
      :key="query"
      @infinite="fetchMovies"
    />
  </div>
</template>

<script>
import ImageCardList from '@/components/ImageCardList'
import InfiniteLoader from '@/components/InfiniteLoader'
import fetchTmdbData from '@/api/tmdbApiService'

export default {
  name: 'MoviesList',
  components: {
    ImageCardList,
    InfiniteLoader
  },
  props: {
    query: {
      type: String,
      default: null
    },
    resource: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      page: 1,
      movies: []
    }
  },
  computed: {
    moviesIds () {
      return this.movies.map(movie => movie.id)
    }
  },
  watch: {
    query (newValue, oldValue) {
      if (oldValue && (newValue !== oldValue)) {
        this.page = 1
        this.movies = []
      }
    }
  },
  methods: {
    fetchMovies ($state) {
      const params = {
        page: this.page
      }
      if (this.query) {
        params.query = this.query
      }
      fetchTmdbData(this.resource, params)
        .then(({ data }) => {
          if (data.results.length) {
            this.page += 1
            this.movies.push(...data.results.filter(result => !this.moviesIds.includes(result.id)))
            $state.loaded()
          } else {
            $state.complete()
          }
        })
        .catch(() => {
          $state.error()
        })
    }
  }
}
</script>
