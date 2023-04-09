import type { PluginInfoEntity } from "@/api/gql";
import type { SemVer } from "semver";
import type { DeepReadonly } from "ts-essentials";

export type RawPluginEntry = DeepReadonly<{
  id: number;
  version: string;
  files: string[];
}>;

export type RawPluginEntries = DeepReadonly<RawPluginEntry[]>;

export type LocalPluginEntry = DeepReadonly<{
  id: PluginInfoEntity["id"];
  version: SemVer;
  files: string[];
}>;

export type LocalPluginEntries = Map<LocalPluginEntry["id"], LocalPluginEntry>;
export type ReadonlyLocalPluginEntries = ReadonlyMap<LocalPluginEntry["id"], LocalPluginEntry>;
