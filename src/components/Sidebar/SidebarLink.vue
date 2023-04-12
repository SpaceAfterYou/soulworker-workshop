<script setup lang="ts">
import { RouterLink } from "vue-router";
import type { RouteName } from "@/modules/router/name";

defineProps<{ name: RouteName }>();
</script>

<template>
  <RouterLink :to="{ name }" class="uppercase text-zinc-200/40 transition duration-100 hover:border-r-zinc-200/50 hover:text-zinc-200/60">
    <slot />
  </RouterLink>
</template>

<style scoped>
.router-link-active {
  @apply text-zinc-200 cursor-default;
}
</style>
