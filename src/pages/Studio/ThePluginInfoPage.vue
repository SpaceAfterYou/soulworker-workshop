<script lang="ts" setup>
import { useMyPluginsInfoQuery } from "@/api/gql";
import MyPluginQuery from "@/components/Queries/MyPluginQuery.vue";

const { query } = toRefs(useRoute());
</script>

<template>
  <section class="flex-1">
    <MyPluginQuery :id="Number(query.id)" v-slot="params">
      {{ params }}
    </MyPluginQuery>
  </section>
</template>
