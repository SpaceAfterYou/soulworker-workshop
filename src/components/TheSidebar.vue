<script setup lang="ts">
import { RouteName } from "@/modules/router/name";

import SidebarLink from "./Sidebar/SidebarLink.vue";
</script>

<template>
  <aside class="flex flex-col gap-4 p-4">
    <SidebarLink :name="RouteName.Store"> Store </SidebarLink>
    <SidebarLink :name="RouteName.Studio"> Studio </SidebarLink>
    <SidebarLink :name="RouteName.Settings"> Settings </SidebarLink>
  </aside>
</template>
