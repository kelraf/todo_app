<template>
  <div id="app">
    <div id="nav">
      <Navigation />
    </div>
    <div class="router-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation"
export default {
  nama: "app",
  components: {
    Navigation
  }
}
</script>

<style>

</style>
