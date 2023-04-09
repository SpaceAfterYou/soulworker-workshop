<script setup lang="ts">
import { Bars3BottomLeftIcon, Cog6ToothIcon } from "@heroicons/vue/24/outline";
import { RouteName } from "@/modules/router/name";

import SidebarIconLink from "./Sidebar/SidebarIconLink.vue";
</script>

<template>
  <aside class="border-r border-white/10">
    <div class="-mr-[1px] flex flex-col gap-2">
      <SidebarIconLink :name="RouteName.Store">
        <Bars3BottomLeftIcon />
      </SidebarIconLink>

      <SidebarIconLink :name="RouteName.Settings">
        <Cog6ToothIcon />
      </SidebarIconLink>
    </div>
  </aside>
</template>
