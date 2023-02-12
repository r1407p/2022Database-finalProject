import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/videos",
    name: "videos",
    component: () => import("./components/Team_Filter")
  },
  {
    path: "/videos/:id",
    name: "video-details",
    component: () => import("./components/TheVideo")
  },
  {
    path: "/BR",
    name: "BR",
    component: () => import("./components/BR")
  },{
    path: "/CA",
    name: "CA",
    component: () => import("./components/CA")
  },{
    path: "/DE",
    name: "DE",
    component: () => import("./components/DE")
  },{
    path: "/FR",
    name: "FR",
    component: () => import("./components/FR")
  },{
    path: "/GB",
    name: "GB",
    component: () => import("./components/GB")
  },{
    path: "/IN",
    name: "IN",
    component: () => import("./components/IN")
  },{
    path: "/JP",
    name: "JP",
    component: () => import("./components/JP")
  },{
    path: "/KR",
    name: "KR",
    component: () => import("./components/KR")
  },{
    path: "/MX",
    name: "MX",
    component: () => import("./components/MX")
  },{
    path: "/RU",
    name: "RU",
    component: () => import("./components/RU")
  }
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;