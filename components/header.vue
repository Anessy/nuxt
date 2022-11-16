<template>
  <header class="header">
    <ul>
      <li>
        <nuxt-link to="/">HOME</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/users">USERS</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
