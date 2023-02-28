import Vue from "vue";
import Router from "vue-router";

import LoginPage from "./components/login/loginPage.vue";
import BookListPage from "./components/book/bookListPage.vue";
import BookEntryPage from "./components/book/BookEntryPage.vue";
import LibraryListPage from "./components/library/libraryListPage.vue";

Vue.use(Router);

const routes = [
  { path: "/", name: "login", component: LoginPage },
  { path: "/books", name: "bookList", component: BookListPage },
  { path: "/books/:id", name: "bookItem", component: BookEntryPage },
  { path: "/library", name: "libraryList", component: LibraryListPage },
];

export default new Router({
  routes,
});
