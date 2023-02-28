import Vue from "vue";
import VueX from "vuex";

Vue.use(VueX);

export default new VueX.Store({
  state: {
    authToken: "",
    logged: false,
    message: {
      text: "",
      type: "",
    },
  },
  mutations: {
    setAuthToken(state, payload) {
      window.localStorage.authToken = payload;
      state.authToken = payload;
      state.logged = Boolean(state.authToken);
    },

    setLogged(state, payload) {
      state.logged = payload;
    },

    showErrorMessage(state, payload) {
      state.message = {
        text: payload,
        type: "ERROR",
      };
    },

    showSuccessMessage(state, payload) {
      state.message = {
        text: payload,
        type: "SUCCESS",
      };
    },
  },
});
