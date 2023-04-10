import { RouteName } from "../name";

import type { RouteRecordRaw } from "vue-router";

export const store: RouteRecordRaw = {
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

          component: () => import("@/pages/Store/TheLibraryPage.vue"),
        },
        {
          path: RouteName.Plugins,
          name: RouteName.Plugins,

          component: () => import("@/pages/Store/ThePluginsPage.vue"),
        },
      ],
    },
  ],
};
