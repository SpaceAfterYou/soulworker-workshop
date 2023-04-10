<script setup lang="ts">
import { RouterView } from "vue-router";

import TheSidebar from "@/components/TheSidebar.vue";
</script>

<template>
  <section class="grid grid-cols-[auto_1fr]">
    <TheSidebar />

    <RouterView class="bg-zinc-800 p-4" />
  </section>
</template>
