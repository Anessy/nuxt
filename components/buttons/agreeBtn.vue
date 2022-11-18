<template>
  <v-btn
    style="color: forestgreen"
    class="ma-2"
    :loading="false"
    :disabled="false"
    color="success"
    @click="">
    {{ buttonName }}
    <template v-slot:loader>
      <span>Loading...</span>
    </template>
  </v-btn>
</template>

<script>
export default {
  name: 'agreeBtn',
  props: {
    buttonName: {
      type: String,
      default: 'Agree'
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
