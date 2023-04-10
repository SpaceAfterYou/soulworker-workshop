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
    <ToolbarButton class="group/toolbar" @click="$emit('onRemove', id)">
      <TrashIcon class="h-4 group-hover/toolbar:hidden" />
      <TrashIconSolid class="hidden h-4 group-hover/toolbar:block" />
      <span>Remove</span>
    </ToolbarButton>

    <div class="flex gap-2">
      <ToolbarButton class="group/toolbar">
        <HandThumbUpIcon class="h-4 text-green-500 group-hover/toolbar:hidden" />
        <HandThumbUpIconSolid class="hidden h-4 text-green-500 group-hover/toolbar:block" />
      </ToolbarButton>

      <ToolbarButton class="group/toolbar">
        <HandThumbDownIcon class="h-4 text-red-500 group-hover/toolbar:hidden" />
        <HandThumbDownIconSolid class="hidden h-4 text-red-500 group-hover/toolbar:block" />
      </ToolbarButton>
    </div>
  </ToolbarPanel>
</template>
