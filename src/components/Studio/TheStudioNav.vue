<script setup lang="ts">
import { RouteName } from "@/modules/router/name";

import ThingTabs from "@/components/Thing/ThingTabs.vue";
import ThingTab from "@/components/Thing/ThingTab.vue";

const routes = [
  { name: RouteName.MyPlugins, title: "My Plugins" },
  { name: RouteName.AddPlugin, title: "Add Plugin" },
];
</script>

<template>
  <ThingTabs>
    <ThingTab v-for="{ name, title } in routes" :key="name" :name="name" :title="title">
      {{ title }}
    </ThingTab>
  </ThingTabs>
</template>
