<script setup lang="ts">
import TheStoreHeader from "@/components/Store/TheStoreNav.vue";
</script>

<template>
  <section>
    <TheStoreHeader />

    <RouterView />
  </section>

  <!-- https://youtu.be/SiFLjGRIRfo?list=RDGX9JGzzT7jw -->
</template>

<style scoped>
.router-link-active {
  /* 60% = border-r 10% + active border-r 50% */
  @apply text-white/60;

  @apply border-b-white/50;
}
</style>
