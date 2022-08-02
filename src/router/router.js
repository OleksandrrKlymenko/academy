import { createWebHistory, createRouter } from "vue-router";
import Main from "@/pages/Main.vue"
import Events from "@/pages/Events.vue"
import Event from "@/pages/Event.vue"
import NewsList from "@/pages/news/NewsList.vue"
import One from "@/pages/news/One.vue"
import Map from "@/pages/Map.vue"
import pageNotFound from "@/pages/404.vue"

const routes = [
  {
      base: '/[academy]/',
      path: "/",
      name: "Main",
      component: Main,
    },
    {
      path: "/Events",
      name: "Events",
      component: Events,
    },
    {
      path: "/Event",
      name: "Event",
      component: Event,
    },
    {
      path: "/Map",
      name: "Map",
      component: Map,
    },
    {
      path: "/news",
      name: "NewsList",
      component: NewsList,
    },
    {
      path: "/NewsList/:title",
      name: "One",
      component: One,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "pageNotFound",
      component: pageNotFound,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;