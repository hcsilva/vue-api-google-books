<template>
  <v-app>
    <app-header />
    <v-main>
      <router-view />
    </v-main>
    <feedback />
  </v-app>
</template>

<script>
import Feedback from "./components/feedback/feedback.vue";
import AppHeader from "./components/header/appHeader.vue";

export default {
  components: { Feedback, AppHeader },
  name: "App",
  created() {
    if (window.localStorage.authToken) {
      this.$store.commit("setAuthToken", window.localStorage.authToken);
    } else {
      this.$router.push("/");
    }
  },
};
</script>
