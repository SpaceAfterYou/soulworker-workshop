<script setup lang="ts">
import { RouterView } from "vue-router";

import TheSidebar from "@/components/TheSidebar.vue";
</script>

<template>
  <section class="grid grid-cols-[auto_1fr] gap-2">
    <TheSidebar />
    <RouterView class="py-4 pl-2 pr-4" />
  </section>
</template>
