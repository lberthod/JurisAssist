<template>
  <div id="app">
    <LegalHeroHeader />
  </div>
</template>

<script setup>
import LegalHeroHeader from './LegalHeroHeader.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>
