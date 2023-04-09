<script setup lang="ts">
import { usePluginsStore } from "@/modules/store/plugins";

import { ArrowDownTrayIcon } from "@heroicons/vue/24/outline";
import { ArrowDownTrayIcon as ArrowDownTrayIconSolid } from "@heroicons/vue/24/solid";

import ToolbarPanel from "../ToolbarPanel.vue";
import ToolbarButton from "../ToolbarButton.vue";

import type { SemVer } from "semver";
import type { DeepNonNullable } from "ts-essentials";

type Props = {
  id: number;
  version: SemVer | null;
  url: URL | null;
};

type Emits = {
  (e: "onAdd", params: DeepNonNullable<Props>): Promise<void>;
};

defineEmits<Emits>();
defineProps<Props>();

const plugins = usePluginsStore();
</script>

<template>
  <ToolbarPanel>
    <ToolbarButton v-if="version && !plugins.values.has(id)" class="group" @click="$emit('onAdd', $props)">
      <ArrowDownTrayIcon class="h-4 group-hover:hidden" />
      <ArrowDownTrayIconSolid class="hidden h-4 group-hover:block" />
      <span>Install</span>
    </ToolbarButton>

    <div v-else class="font-bold uppercase italic text-green-500">Currently installed</div>
  </ToolbarPanel>
</template>
