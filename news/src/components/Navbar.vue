<template>
  <div class="pure-menu pure-menu-horizontal">
    <div class="container">
      <a href="/" class="pure-menu-heading pure-munu-link">Hacker News</a>
      <ul class="pure-menu-list">
        <li class="pure-menu-item"><router-link :to="{ path: '/single' }" class="pure-menu-link">Upload</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.pure-menu {
  background-color: #E17842;
}
.pure-menu a {
  color: white;
}
</style>
