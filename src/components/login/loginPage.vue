<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="4" lg="3" class="text-center">
        <h6 class="display-1 text-uppercase">Login</h6>
        <v-text-field v-model="token" label="Token"></v-text-field>

        <v-btn depressed dark block color="primary" @click="login" class="mb-2">
          Login
        </v-btn>

        <v-btn color="secondary" text @click="loginAsGuest">
          Entrar como Visitante
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      token: "AIzaSyBEJShP1Ce3o91OnYkuVCPyzqxdmxrONrs",
    };
  },
  methods: {
    login() {
      if (this.token) {
        this.$store.commit("setAuthToken", this.token);
        this.$router.push("/books");
      } else {
        this.$store.commit("showErrorMessage", "Você deve informar um Token!");
      }
    },

    loginAsGuest() {
      this.$store.commit("setLogged", true);
      this.$router.push("/books");
    },
  },
};
</script>

<style scoped></style>
