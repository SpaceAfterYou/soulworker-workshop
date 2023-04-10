import { RouteName } from "../name";

import type { RouteRecordRaw } from "vue-router";
import { store } from "./store";
import { studio } from "./studio";

export const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/",
    component: () => import("@/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        redirect: RouteName.Store,
      },
      store,
      studio,
      {
        path: RouteName.Settings,
        name: RouteName.Settings,

        component: () => import("@/pages/TheSettingsPage.vue"),
      },
    ],
  },
];
