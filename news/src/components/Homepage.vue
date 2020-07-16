<template>
  <div>
    <h2>Homepage</h2>
    <div v-for="story in stories" :key="story">
      <h2>{{ story.data.title }}</h2>
      <p>{{ story.data.url }}}</p>
      <p>Comments: {{ story.data.descendants }}</p>
      <p>Score: {{ story.data.score }}</p>
    </div>
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
        let response = result.data.slice(0, 10)
        response.forEach(id => {
          axios
            .get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
            .then(result => {
              this.stories.push(result)
            })
        })
      })
      .catch((err) => {
        this.err = err
      })
  }
}
</script>

<style scoped>
</style>
