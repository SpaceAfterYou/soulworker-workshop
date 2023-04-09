<script setup lang="ts">
import { usePluginsStore } from "@/modules/store/plugins";

import PreviewPlugin from "@/components/Plugin/Preview/PreviewPlugin.vue";
import ToolbarAvailablePanel from "@/components/Plugin/Toobar/Panels/ToolbarAvailablePanel.vue";
import AvailablePluginQuery from "@/components/Queries/AvailablePluginQuery.vue";

import type { SemVer } from "semver";

const plugins = usePluginsStore();

async function onAdd(params: { id: number; version: SemVer; url: URL }) {
  await plugins.install(params);
}
</script>

<template>
  <AvailablePluginQuery>
    <template #default="{ id, name, description, rating, author, version, url }">
      <PreviewPlugin :id="id" :key="id" :name="name" :description="description" :rating="rating" :creator="author" :version="version">
        <ToolbarAvailablePanel :id="id" :version="version" :url="url" @on-add="onAdd" />
      </PreviewPlugin>
    </template>
  </AvailablePluginQuery>
</template>
