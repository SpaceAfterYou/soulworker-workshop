<script setup lang="ts">
import { RouteName } from "@/modules/router/name";

defineProps<{ id: number }>();
</script>

<template>
  <RouterLink
    :to="{ name: RouteName.MyPluginInfo, query: { id } }"
    class="bg-zinc-500/5 p-3 shadow shadow-transparent transition duration-100 hover:bg-zinc-500/20 hover:shadow-lg"
  >
    <slot />
  </RouterLink>
</template>
