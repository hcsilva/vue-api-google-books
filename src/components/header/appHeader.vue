<template>
  <v-app-bar app dark flat color="secondary">
    <v-toolbar-title>Projeto Vue</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items v-if="$store.state.logged">
      <v-btn text @click="goToBookList"> Livros </v-btn>
      <v-btn text @click="goToMyCollection" v-if="$store.state.authToken">
        Minha Coleção
      </v-btn>
      <v-btn text @click="logout"> Sair </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    goToBookList() {
      this.$router.push("/books");
    },
    goToMyCollection() {
      this.$router.push("/library");
    },
    logout() {
      this.$store.commit("setAuthToken", "");
      this.$router.push("/");
    },
  },
};
</script>
