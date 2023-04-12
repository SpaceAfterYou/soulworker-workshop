<script setup lang="ts">
import { useInstalledPluginsQuery, type InstalledPluginsQuery } from "@/api/gql";

type Node = NonNullable<NonNullable<InstalledPluginsQuery["plugins"]>["nodes"]>[number];

const props = defineProps<{ id: number }>();

const { result } = useInstalledPluginsQuery({ id: props.id });

function format({ name, description, averageRating, creator }: Node) {
  return {
    name,
    description,
    rating: averageRating,
    author: creator.name,
  };
}

function formatAll(v?: InstalledPluginsQuery) {
  if (!v) return;

  return v.plugins?.nodes?.map(format);
}
</script>

<template>
  <slot v-for="v of formatAll(result)" v-bind="v" />
</template>
