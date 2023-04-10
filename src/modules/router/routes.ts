import { RouteName } from "./name";

import type { RouteRecordRaw } from "vue-router";
import type { DeepReadonly } from "ts-essentials";

export const routes: DeepReadonly<RouteRecordRaw[]> = [
  {
    path: "/",
    component: () => import("@/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        redirect: RouteName.Store,
      },
      {
        path: RouteName.Store,
        name: RouteName.Store,

        redirect: () => ({ name: RouteName.Plugins }),
        component: () => import("@/views/TheStoreView.vue"),

        children: [
          {
            path: RouteName.PluginsView,

            redirect: () => ({ name: RouteName.Plugins }),
            component: () => import("@/views/ThePluginsView.vue"),

            children: [
              {
                path: RouteName.Library,
                name: RouteName.Library,

                component: () => import("@/pages/TheLibraryPage.vue"),
              },
              {
                path: RouteName.Plugins,
                name: RouteName.Plugins,

                component: () => import("@/pages/ThePluginsPage.vue"),
              },
            ],
          },
        ],
      },
      {
        path: RouteName.Studio,
        name: RouteName.Studio,

        component: () => import("@/pages/TheStudioPage.vue"),
      },

      {
        path: RouteName.Settings,
        name: RouteName.Settings,

        component: () => import("@/pages/TheSettingsPage.vue"),
      },
    ],
  },
];
