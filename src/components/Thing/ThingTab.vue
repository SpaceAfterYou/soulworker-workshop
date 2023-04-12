<script lang="ts" setup>
import type { RouteName } from "@/modules/router/name";

type Props = { title: string; name: RouteName };

defineProps<Props>();
</script>

<template>
  <RouterLink :to="{ name }" class="router-link uppercase text-zinc-200/40 transition duration-100 hover:border-r-zinc-200/50 hover:text-zinc-200/60">
    {{ title }}
  </RouterLink>
</template>

<style scoped>
.router-link-active {
  @apply text-zinc-200 cursor-default;
}
</style>
