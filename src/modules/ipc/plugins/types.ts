import type { DeepReadonly } from "ts-essentials";

export type BackendInstallResponse = DeepReadonly<{
  files: string[];
}>;
