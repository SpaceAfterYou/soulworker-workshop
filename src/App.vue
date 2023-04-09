<script setup lang="ts">
import { DefaultApolloClient } from "@vue/apollo-composable";
import { defaultClient } from "./modules/apollo";

import AppMain from "./AppMain.vue";

provide(DefaultApolloClient, defaultClient);
</script>

<template>
  <Suspense>
    <AppMain />
  </Suspense>
</template>
