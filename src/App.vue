<template>
  <div id="app" class="container">
    <h1>Galleries</h1>
    <nav-bar />
    <router-view/>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import store from './store'

export default {
	name: 'app',
	components: { NavBar },
	async mounted() {
    await store.dispatch('auth/getActiveUser');
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
