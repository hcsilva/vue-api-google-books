<template>
  <v-card class="mx-auto book-card" elevation="2">
    <div
      v-if="
        book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
      "
      class="text-center pt-3"
    >
      <img :src="book.volumeInfo.imageLinks.smallThumbnail" />
    </div>

    <v-card-title>
      <span>{{ book.volumeInfo.title.substring(0, maxTitleLength) }}</span>
      <span v-if="book.volumeInfo.title.length > maxTitleLength">...</span>
    </v-card-title>

    <v-card-text>
      {{ book.volumeInfo.subtitle || "Sem descrição" }}
    </v-card-text>

    <v-card-actions>
      <v-btn text small color="primary" @click="goToDetails">
        Ver detalhes
      </v-btn>
      <v-btn
        v-if="this.book.volumeInfo.previewLink"
        text
        small
        color="primary"
        @click="goToPreview(book)"
      >
        ver preview
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import bookService from "./bookService.js";

export default {
  name: "BookItem",
  mixins: [bookService],
  props: {
    book: { type: Object, required: true },
  },

  data() {
    return {
      maxTitleLength: 20,
    };
  },

  methods: {
    goToDetails() {
      this.$router.push(`/books/${this.book.id}`);
    },
  },
};
</script>

<style scoped>
.book-card {
  height: 100%;
}
</style>
