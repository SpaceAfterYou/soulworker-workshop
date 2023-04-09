<script setup lang="ts">
import { RouterLink } from "vue-router";
import type { RouteName } from "@/modules/router/name";

defineProps<{ name: RouteName }>();
</script>

<template>
  <RouterLink :to="{ name }" class="border-r border-r-transparent p-3 text-white/40 hover:border-r-white/50 hover:text-white/60">
    <div class="h-8 w-8">
      <slot />
    </div>
  </RouterLink>
</template>

<style scoped>
.router-link-active {
  /* 60% = border-r 10% + active border-r 50% */
  @apply text-white/60;

  @apply border-r-white/50;
}
</style>
