<script setup lang="ts">
import { useMyPluginsInfoQuery, type MyPluginsInfoQuery } from "@/api/gql";

type Node = NonNullable<NonNullable<MyPluginsInfoQuery["plugins"]>["nodes"]>[number];

const props = defineProps<{ id: number }>();

const { result } = useMyPluginsInfoQuery({ id: props.id });

function format({ name, description, averageRating, versions }: Node) {
  return {
    name,
    description,
    rating: averageRating,
  };
}

function formatAll(v?: MyPluginsInfoQuery) {
  if (!v) return;

  return v.plugins?.nodes?.map(format);
}
</script>

<template>
  <slot v-for="v of formatAll(result)" v-bind="v" />
</template>
