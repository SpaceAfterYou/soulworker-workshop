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
  <section class="group/plugin-preview leading-none">
    <div
      class="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 overflow-hidden bg-zinc-500/5 p-3 transition duration-100 group-hover/plugin-preview:bg-zinc-500/20"
    >
      <div class="row-span-2 h-12 w-12">
        <slot name="icon" />
      </div>

      <div class="flex items-baseline gap-2">
        <span class="overflow-hidden text-ellipsis whitespace-nowrap font-bold uppercase">{{ name }}</span>
        <span class="text-xs text-zinc-200/40">v{{ version }}</span>
      </div>

      <span class="text-right font-bold" :class="[overallClassRating]">
        {{ rating.toFixed(1) }}
      </span>

      <div class="overflow-hidden text-ellipsis whitespace-nowrap text-zinc-200/40">
        {{ description }}
      </div>

      <div class="text-right lowercase italic text-pink-500/40">{{ creator }}</div>
    </div>

    <div class="mt-px bg-zinc-500/5 p-3 transition duration-100 group-hover/plugin-preview:bg-zinc-500/20">
      <slot />
    </div>
  </section>
</template>
