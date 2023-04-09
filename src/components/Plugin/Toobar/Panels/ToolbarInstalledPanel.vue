<script setup lang="ts">
import { TrashIcon, HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/vue/24/outline";
import { TrashIcon as TrashIconSolid, HandThumbDownIcon as HandThumbDownIconSolid, HandThumbUpIcon as HandThumbUpIconSolid } from "@heroicons/vue/24/solid";

import ToolbarPanel from "../ToolbarPanel.vue";
import ToolbarButton from "../ToolbarButton.vue";

import type { PluginInfoEntity } from "@/api/gql";

type Props = {
  id: PluginInfoEntity["id"];
};

type Emits = {
  (e: "onRemove", id: Props["id"]): void;
};

defineEmits<Emits>();
defineProps<Props>();
</script>

<template>
  <ToolbarPanel class="flex justify-between gap-4">
    <ToolbarButton class="group" @click="$emit('onRemove', id)">
      <TrashIcon class="h-4 group-hover:hidden" />
      <TrashIconSolid class="hidden h-4 group-hover:block" />
      <span>Remove</span>
    </ToolbarButton>

    <div class="flex gap-2">
      <ToolbarButton class="group">
        <HandThumbUpIcon class="h-4 text-green-500 group-hover:hidden" />
        <HandThumbUpIconSolid class="hidden h-4 text-green-500 group-hover:block" />
      </ToolbarButton>

      <ToolbarButton class="group">
        <HandThumbDownIcon class="h-4 text-red-500 group-hover:hidden" />
        <HandThumbDownIconSolid class="hidden h-4 text-red-500 group-hover:block" />
      </ToolbarButton>
    </div>
  </ToolbarPanel>
</template>
