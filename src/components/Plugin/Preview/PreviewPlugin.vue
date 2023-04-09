<script setup lang="ts">
import { SemVer } from "semver";

type Props = {
  id: number;
  name: string;
  description: string;
  rating: number;
  creator: string;
  version: SemVer | null;
};

const props = defineProps<Props>();

const overallClassRating = computed(() => {
  if (props.rating < 4) return "text-red-500";
  if (props.rating < 7.5) return "text-yellow-500";
  return "text-green-500";
});

const version = computed(() => {
  if (!props.version) return "-";
  return new SemVer(`${props.version.major}.${props.version.minor}.${props.version.patch}`);
});
</script>

<template>
  <section class="grid grid-cols-[1fr_auto] gap-2 overflow-hidden bg-zinc-500/10 p-3 leading-none">
    <div class="flex items-baseline gap-2">
      <span class="overflow-hidden text-ellipsis whitespace-nowrap font-bold uppercase">{{ name }}</span>
      <span class="text-xs text-white/40">v{{ version }}</span>
    </div>

    <span class="text-right font-bold" :class="[overallClassRating]">
      {{ rating.toFixed(1) }}
    </span>

    <div class="overflow-hidden text-ellipsis whitespace-nowrap text-white/40">
      {{ description }}
    </div>

    <div class="text-right lowercase italic text-pink-500/40">{{ creator }}</div>

    <slot />
  </section>
</template>
