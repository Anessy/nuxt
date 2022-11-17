<template>
  <div>
    <section>
      <Header/>
    </section>
    <section>
      <nuxt/>
    </section>
    <section class="footer">
      <Footer/>
    </section>
  </div>
</template>

<script>
import Header from '~/components/header'
import Footer from '~/components/footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style>
html {
  font-family: 'Nunito', 'Lato', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
}

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: lightgray;
}
</style>
