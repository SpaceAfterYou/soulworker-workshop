<script setup lang="ts">
import { CubeTransparentIcon } from "@heroicons/vue/24/outline";
import { usePluginsStore } from "@/modules/store/plugins";

import PreviewPlugin from "@/components/Plugin/Preview/PreviewPlugin.vue";
import ToolbarInstalledPanel from "@/components/Plugin/Toobar/Panels/ToolbarInstalledPanel.vue";
import InstalledPluginQuery from "@/components/Queries/InstalledPluginQuery.vue";

const plugins = usePluginsStore();

function onRemove(id: number) {
  console.log(`remove req: ${id}`);
}
</script>

<template>
  <InstalledPluginQuery v-for="[_, { id, version }] of plugins.values" :id="id">
    <template #default="{ name, description, rating, author }">
      <PreviewPlugin :id="id" :key="id" :name="name" :description="description" :rating="rating" :creator="author" :version="version">
        <template #icon>
          <CubeTransparentIcon />
        </template>
        <ToolbarInstalledPanel :id="id" @on-remove="onRemove" />
      </PreviewPlugin>
    </template>
  </InstalledPluginQuery>
</template>
