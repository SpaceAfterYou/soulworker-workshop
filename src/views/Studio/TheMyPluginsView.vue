<script lang="ts" setup>
import { useMyPluginsListQuery } from "@/api/gql";

import PluginLink from "@/components/Studio/MyPlugins/PluginLink.vue";

const { result } = useMyPluginsListQuery({ id: 1 });
</script>

<template>
  <section class="flex items-start gap-4">
    <div class="mr-px flex flex-col shadow">
      <PluginLink v-for="{ id, name } of result?.plugins?.nodes" :id="id">{{ name }}</PluginLink>
    </div>

    <RouterView />
  </section>
</template>
