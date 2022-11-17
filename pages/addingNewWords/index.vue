<template>
  <div>
    <v-text-field>
      <v-icon
        style="color: forestgreen"
        slot="prepend">
        mdi-plus
      </v-icon>
    </v-text-field>
    <v-btn
      style="color: forestgreen"
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'">
      Add the word
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>
  </div>
</template>
