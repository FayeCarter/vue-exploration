<template>
  <div>
    <h2>Homepage</h2>
    <div v-for="story in stories" :key="story"><h2>{{ story }}</h2></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Homepage',
  data: function () {
    return {
      err: '',
      stories: []
    }
  },
  created: function () {
    axios
      .get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(result => {
        this.stories = result.data
      })
      .catch((err) => {
        this.err = err
      })
  }
}
</script>

<style scoped>
</style>
