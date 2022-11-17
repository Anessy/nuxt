<template>
  <div>
    <section>
      Add new words
      <nuxt-link to="/addingNewWords">Go to</nuxt-link>
    </section>
    <section>
      View the dictionary
      <nuxt-link to="/dictionary">Go to</nuxt-link>
    </section>
    <section>
      Learn new words
      <nuxt-link :to="'/learning/' + 1">Go to</nuxt-link>
    </section>
  </div>
</template>

<script>
import Header from '../components/header'
export default {
  components: {
    Header
  }
}
</script>
