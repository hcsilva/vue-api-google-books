<template>
  <div>
    <v-row>
      <v-col cols="12">
        <search-input-field @search="doSearch" />
      </v-col>
    </v-row>

    <v-row v-if="!bookList.length" justify="center">
      <v-col cols="12" md="4" class="text-center">
        <p class="overline">Digite algo para iniciar a pesquisa</p>
      </v-col>
    </v-row>

    <loading :condition="searchOnGoing">
      <v-row>
        <v-col v-for="(book, i) in bookList" :key="i" cols="12" md="3" lg="2">
          <book-item :book="book" />
        </v-col>
      </v-row>
    </loading>
  </div>
</template>

<script>
import loading from "../loading/loading.vue";
import BookItem from "./bookItem.vue";
import api from "../api/api.js";
import SearchInputField from "../search/searchInputField.vue";

export default {
  components: { loading, BookItem, SearchInputField },
  mixins: [api],
  name: "BookList",
  data() {
    return {
      bookList: [],
      searchOnGoing: false,
    };
  },

  methods: {
    doSearch(textSearch) {
      if (textSearch) {
        this.searchOnGoing = true;
        this.get(`/volumes?q=${textSearch}`).then((response) => {
          this.bookList = response.data.items;
          this.searchOnGoing = false;
        });
      } else {
        this.bookList = [];
      }
    },
  },
};
</script>
