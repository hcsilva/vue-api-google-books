<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="4" lg="3">
        <h6 class="display-1 text-uppercase">Livros</h6>
      </v-col>
    </v-row>
    <book-list />
  </v-container>
</template>

<script>
import bookList from "./bookList.vue";

export default {
  components: { bookList },
  name: "BookListPage",
};
</script>
