<template>
  <v-card class="mx-auto book-card" elevation="2">
    <v-card-title>
      <span>{{ shelf.title }}</span>
    </v-card-title>

    <v-card-text>
      <span
        >Número de Livros:
        <span class="font-weight-medium ml-1">
          {{ shelf.volumeCount }}
        </span>
      </span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "LibrayItem",
  props: {
    shelf: { type: Object, required: true },
  },
};
</script>
