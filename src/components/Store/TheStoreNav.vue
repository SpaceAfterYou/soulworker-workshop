<script setup lang="ts">
import { RouteName } from "@/modules/router/name";

const routes = [
  { name: RouteName.Plugins, title: "Plugins" },
  { name: RouteName.Library, title: "Library" },
];
</script>

<template>
  <nav class="flex gap-4 pb-4 text-lg uppercase text-zinc-200/40">
    <RouterLink v-for="{ name, title } in routes" :key="name" :to="{ name }" class="router-link border border-transparent px-2 transition duration-100">
      {{ title }}
    </RouterLink>
  </nav>
</template>

<style scoped>
.router-link-active {
  /* @apply bg-zinc-200/60 text-zinc-900; */
  @apply text-zinc-200/60 border-zinc-200/60;
}

.router-link:not(.router-link-active):hover {
  @apply bg-zinc-200/60 text-zinc-900;
}
</style>
