import { RouteName } from "../name";

import type { RouteRecordRaw } from "vue-router";

export const studio: RouteRecordRaw = {
  path: RouteName.Studio,
  name: RouteName.Studio,

  redirect: () => ({ name: RouteName.MyPlugins }),
  component: () => import("@/views/TheStudioView.vue"),

  children: [
    {
      path: RouteName.MyPlugins,
      component: () => import("@/views/Studio/TheMyPluginsView.vue"),
      children: [
        {
          path: RouteName.MyPlugins,
          name: RouteName.MyPlugins,

          component: () => import("@/pages/Studio/ThePluginHomePage.vue"),
        },
        {
          path: RouteName.MyPluginInfo,
          name: RouteName.MyPluginInfo,

          component: () => import("@/pages/Studio/ThePluginInfoPage.vue"),
        },
      ],
    },
    {
      path: RouteName.AddPlugin,
      name: RouteName.AddPlugin,

      component: () => import("@/pages/Studio/TheAddPlugin.vue"),
    },
  ],
};
