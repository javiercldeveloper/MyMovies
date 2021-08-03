<template>
  <div class="layout">
    <input-search
      @input="onInput"
    />
    <movies-list
      v-if="query"
      :query="query"
      resource="search/movie"
    />
  </div>
</template>
<script>

import InputSearch from '@/components/InputSearch'
import MoviesList from '@/components/MoviesList'

export default {
  name: 'PageSearch',
  components: {
    InputSearch,
    MoviesList
  },
  data () {
    return {
      query: null
    }
  },
  methods: {
    onInput (value) {
      this.query = value
    }
  }
}
</script>
