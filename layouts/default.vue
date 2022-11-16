<template>
  <div>
    <Header />
    <nuxt></nuxt>
  </div>
</template>

<script>
import Header from '~/components/header'
export default {
  components: {
    Header
  }
}
</script>
<style>
  html
  {
    font-family: sans-serif;
    font-size: 16px;
    word-spacing: 1px;
  }
</style>
