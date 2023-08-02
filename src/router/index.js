import Vue from "vue";
import VueRouter from "vue-router";
import EntryPage from "@/views/EntryPage";
import EditPage from "@/views/EditPage";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/entry" },
  { path: "/entry", name: "entry", component: EntryPage },
  { path: "/edit/:id", name: "edit", component: EditPage },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
