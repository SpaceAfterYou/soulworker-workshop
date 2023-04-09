<script setup lang="ts">
import { useAvailablePluginsQuery, type AvailablePluginsQuery } from "@/api/gql";
import { SemVer } from "semver";

type Node = NonNullable<NonNullable<AvailablePluginsQuery["plugins"]>["nodes"]>[number];

const { result } = useAvailablePluginsQuery();

function formatVersion({ major, minor, patch }: NonNullable<NonNullable<Node["versions"]>["nodes"]>[number]["version"]) {
  return new SemVer(`${major}.${minor}.${patch}`);
}

function getVersion(v: Node["versions"]) {
  const ver = v?.nodes?.at(0)?.version;
  return ver ? formatVersion(ver) : null;
}

function getUrl(v: Node["versions"]) {
  const uri = v?.nodes?.at(0)?.uri;

  return uri ? new URL(uri) : null;
}

function format({ id, name, description, averageRating, creator, versions }: Node) {
  return {
    id,
    name,
    description,
    rating: averageRating,
    author: creator.name,
    version: getVersion(versions),
    url: getUrl(versions),
  };
}

function formatAll(v?: AvailablePluginsQuery) {
  if (!v) return;

  return v.plugins?.nodes?.map(format);
}
</script>

<template>
  <slot v-for="v of formatAll(result)" v-bind="v" />
</template>
