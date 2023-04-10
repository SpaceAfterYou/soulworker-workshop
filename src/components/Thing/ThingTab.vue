<script lang="ts" setup>
import type { RouteName } from "@/modules/router/name";

type Props = { title: string; name: RouteName };

defineProps<Props>();
</script>

<template>
  <RouterLink :to="{ name }" class="router-link border border-transparent px-2 transition duration-100">
    {{ title }}
  </RouterLink>
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
