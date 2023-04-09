<script setup lang="ts">
import { usePluginsStore } from "./modules/store/plugins";

await usePluginsStore().init();
</script>

<template>
  <section class="grid">
    <RouterView />
  </section>
</template>
