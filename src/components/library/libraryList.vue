<template>
  <div>
    <loading :condition="searchOnGoing">
      <v-row>
        <v-col v-for="(shelf, i) in shelfList" :key="i" cols="12" md="3" lg="2">
          <libray-item :shelf="shelf" />
        </v-col>
      </v-row>
    </loading>
  </div>
</template>

<script>
import Loading from "../loading/loading.vue";
import LibrayItem from "./librayItem.vue";
import api from "../api/api.js";

export default {
  name: "LibraryList",
  components: { Loading, LibrayItem },
  mixins: [api],
  data() {
    return {
      shelfList: [],
      searchOnGoing: false,
    };
  },

  created() {
    this.searchOnGoing = true;
    this.get("/users/100377227936221019138/bookshelves").then((response) => {
      this.shelfList = response.data.items;
      this.searchOnGoing = false;
    });
  },
};
</script>
